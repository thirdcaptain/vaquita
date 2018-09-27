from flask import Flask, redirect, url_for, jsonify
from werkzeug.contrib.fixers import ProxyFix
from flask_dance.contrib.github import make_github_blueprint, github

app = Flask(__name__)
app.secret_key = "supersekrit"
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
blueprint = make_github_blueprint(
    client_id="aef6f8d63f2db700a7c2",
    client_secret="adc1d2ab72161efbfb7e159cc835504444df1a3f",
)
app.register_blueprint(blueprint, url_prefix="/login")

@app.route("/github")
def index():
    if not github.authorized:
        return redirect(url_for("github.login"))
    account_info = github.get('/user')
    if account_info.ok:
        account_info_json = account_info.json()
        return jsonify(account_info_json), 200
    return '<h1>Request failed!</h1>'

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
