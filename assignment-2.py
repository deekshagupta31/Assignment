# Python Assignment:
# See steps (1), (2), and (3) in this file.
# Do not change the house Dictionary. Add your solution
# after every section
house = {
    "rooms": {
        "kitchen": ['stove','mattress','microwave','refrigerator'],
        "bedroom": {
            "furniture": ['bed','bed','broken chair'],
            "airconditioner": False
        },
        "livingRoom": {
            "furniture": ['couch','coffee table'],
        }
    },
}
# (1) Turn on the airconditioner in the bedroom. Change the Boolean
# value False to True.

(house["rooms"]["bedroom"]["airconditioner"])=True
print("Airconditioner in Bedroom : {}".format((house["rooms"]["bedroom"]["airconditioner"])))


# (2) Use the right List method to remove the "mattress" from
# the kitchen. Add your code below.

house["rooms"]["kitchen"].pop((house["rooms"]["kitchen"]).index("mattress"))
print("Items In Kitchen : {}".format(house["rooms"]["kitchen"]))



# (3) Add "book shelf" to the furniture in the living room.
# Use the right List method to do this. Add your code below.

house["rooms"]["livingRoom"]["furniture"].append("book shelf")
print("Furnitures In Living Room : {} ".format(house["rooms"]["livingRoom"]["furniture"]))



# (4) Use the right String method to change the "broken chair" to "chair".
# Add your code below.

idx=house["rooms"]["bedroom"]["furniture"].index("broken chair")
house["rooms"]["bedroom"]["furniture"][idx]="chair"
print("Furnitures In Bedroom : {}".format(house["rooms"]["bedroom"]["furniture"]))

# (5) Count the number of "beds" in the bedroom. Add your code below.

temp=house["rooms"]["bedroom"]["furniture"]
counter=temp.count("bed")    
print("Number Of Beds In Bedroom : {}".format(counter))

print("Final House Data : {}".format(house))