from flask import Flask, render_template, request, make_response, redirect, url_for, send_from_directory
import get_wheels
app = Flask(__name__)

@app.route('/',  methods=['post', 'get'])
def index():
    if request.cookies.get("name"):
         return redirect("/base")
    message = ''
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        if username == 'root' and password == 'pass':
            res = make_response(redirect("/base"))
            res.set_cookie("name", username, max_age=60*60*24*4)
            return res
        else:
            message = f"Wrong username or password + username{username} password {password}"
            return render_template('login.html', message=message)
    return render_template('login.html', message=message)

@app.route('/base')
def base():
    if not request.cookies.get("name"):
         return redirect("/")
    else:
        file = open("wheels.json", encoding="utf-8")
        data = get_wheels.getWheelsFromJSON(file)
        vagons = data.keys()
        return render_template("index.html", vagons=vagons, data=data)

@app.route('/entrance')
def entrance():
    wheel = request.args.get('wheel')
    vagon = request.args.get('vagon')
    return render_template("entrance.html", wheel=wheel, vagon=vagon)

@app.route('/static/&lt;path:path&gt;')
def install(path):
    return send_from_directory('static', path)


if __name__ == "__main__":
    app.run()