from flask import Flask, redirect, url_for
from werkzeug.contrib.fixers import ProxyFix
from flask_dance.contrib.github import make_github_blueprint, github
from flask import jsonify, render_template
from flask_cors import CORS

client_id = "aef6f8d63f2db700a7c2"
client_secret = "adc1d2ab72161efbfb7e159cc835504444df1a3f"

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app)
app.secret_key = "supersekrit"
blueprint = make_github_blueprint(
    client_id=client_id,
    client_secret=client_secret,
)
app.register_blueprint(blueprint, url_prefix="/login")
cors = CORS(app, resources={r"/api/*": {"origins": "0.0.0.0"}})


@app.route("/", strict_slashes=False)
def index():
    if not github.authorized:
    	return 'HI <a href="http://localhost:3000/github">click me to login in</a>'
    account_info = github.get('/user')
    if account_info.ok:
        account_info_json = account_info.json()
        #return jsonify(account_info_json), 200
        print(client_id, client_secret)
        return render_template('index.html', json=account_info_json.get('repos_url'), client_id=client_id, client_secret=client_secret)
    return "<h1>Request failed!</h1>"

@app.route("/github", strict_slashes=False)
def github_login():
    if not github.authorized:
        return redirect(url_for("github.login"))

    account_info = github.get('/user')
    if account_info.ok:
        account_info_json = account_info.json()
        #return jsonify(account_info_json), 200
        return render_template('index.html', json=account_info_json.get('repos_url'), client_id=client_id, client_secret=client_secret)
    return "<h1>Request failed!</h1>"


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000)
