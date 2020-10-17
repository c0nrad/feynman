import requests
import json


def print_baryons(table):
    for i, row in table["rows"].items():
        if i == '0':
            continue
        row = row["columns"]
        name = row['0'].split("[")[0].replace("†", "")
        symbol = row['1']
        contents = row['2']
        mass = row['3']
        charge = row['6']
        charge3 = 0

        if mass == "Unknown":
            continue
        mass = float(mass.split("(")[0].split("±")[0].split("+")[0])

        if charge == "1" or charge == "+1":
            charge3 = 3
        elif charge == "-1" or charge == "−1":
            charge3 = -3
        elif charge == "0":
            charge3 = 0
        elif charge == "+2":
            charge3 = 6
        else:
            raise Exception("what", charge)

        id_append = ""
        id_anti_append = ""
        name_append = ""
        name_anti_append = ""
        if name != "proton" and name != "neutron":
            if (charge3 == 3 or charge3 == 6):
                id_append = "_PLUS"
                id_anti_append = "_MINUS"
                name_append = " Plus"
                name_anti_append = " Minus"
            elif charge3 == -3:
                id_append = "_MINUS"
                id_anti_append = "_PLUS"
                name_append = " Minus"
                name_anti_append = " Minus"

        out = {"id": name.upper().replace(" ", "_") + id_append, "anti": "ANTI" + name.upper().replace(" ", "_") + id_anti_append,
               "name": name.lower() + name_append, "symbol": symbol, "contents": contents, "mass": mass,
               "charge3": charge3, "generation": 0, "baryonCount": 1, "isBaryon": True, "additionalIds": []}
        print(str(out).replace("True", "true"), ",")

        if charge != 0:
            out = {"id": "ANTI"+name.upper().replace(" ", "_") + id_anti_append, "anti": name.upper().replace(" ", "_") + id_append,
                   "name": "Anti" + name.lower() + name_anti_append, "symbol": symbol, "contents": contents, "mass": mass,
                   "charge3": -charge3, "generation": 0, "baryonCount": -1, "isBaryon": True, "additionalIds": []}
            print(str(out).replace("True", "true"), ",")


if __name__ == "__main__":

    response = requests.get(
        "https://www.wikitable2json.com/api/v1/page/List_of_baryons")

    data = response.json()

    table = data["tables"][0]
    print_baryons(table)

    print("")

    table = data["tables"][1]
    print_baryons(table)
