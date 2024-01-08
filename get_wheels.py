import json


def getWheelsFromJSON(file):
    wheels = json.load(file)
    vagons = {}
    wheelsCol = []
    for vagon in wheels:
        vagonNumber = vagon[0]['Vagon']
        for wheel in vagon:
            factory = wheel['factoryGVC']
            number = wheel['numberGVC']
            year = wheel['yearGVC']
            kp = f"{factory}-{number}-{year}"
            wheelsCol.append(kp)
        vagons[vagonNumber] = wheelsCol
        wheelsCol = []
    print(vagons)
    return vagons
