import requests
import json


def print_mesons(table):
    for i, row in table["rows"].items():
        if i == '0':
            continue
        row = row["columns"]
        name = row['0'].split("[")[0].replace("†", "")
        symbol = row['1']
        anti = row['2']
        contents = row['3']
        mass = row['4']

        if len(contents) > 10:
            contents = ""

        if mass == "Unknown":
            continue
        else:
            mass = float(mass.split("(")[0].split("±")[0].split("+")[0])

        if "+" in symbol or "-" in symbol:
            idd = name.upper().replace(" ", "_")
            out = {"id": idd+"_PLUS", "anti": idd+"_MINUS",
                   "name": name + " Plus", "symbol": symbol, "contents": contents, "mass": mass,
                   "charge3": 3, "generation": 0, "baryonCount": 0, "isMeson": True, "additionalIds": []}
            print(str(out).replace("True", "true"), ",")

            out = {"id": idd+"_MINUS", "anti": idd+"_PLUS",
                   "name": name + " Minus", "symbol": symbol, "contents": contents, "mass": mass,
                   "charge3": -3, "generation": 0, "baryonCount": 0, "isMeson": True, "additionalIds": []}
            print(str(out).replace("True", "true"), ",")

        else:
            out = {"id": name.upper().replace(" ", "_"),
                   "name": name, "symbol": symbol, "contents": contents, "mass": mass,
                   "charge3": 0, "generation": 0, "baryonCount": 0, "isMeson": True, "additionalIds": []}
            print(str(out).replace("True", "true"), ",")


if __name__ == "__main__":
    response = requests.get(
        "https://www.wikitable2json.com/api/v1/page/List_of_mesons")

    data = response.json()

    table = data["tables"][1]
    # print(table["caption"])
    print_mesons(table)

    print("")
    table = data["tables"][2]
    # print(table["caption"])
    print_mesons(table)
