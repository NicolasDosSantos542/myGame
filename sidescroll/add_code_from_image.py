from email.mime import image
import os
print(os.getcwd())
from PIL import Image
import glob

root_path = 'sidescroll/game/assets/images/collectables'
def create_image_list(path):
    image_list = []
    for filename in glob.glob(path+'/*.png'): #assuming gif
        im=Image.open(filename)

        image_list.append({
            "name" :find_image_name_from_path(filename),
            "path" : filename,
            "width" : im.width,
            "height" : im.height })
    return image_list


def find_image_name_from_path(path):
    return os.path.basename(path)


def create_phaser_loader_from_names(dict):
    for element in dict:
        name = os.path.splitext(element["name"])[0]
        if "image" in element['path']:
            loader_string = f"game.load.image('{name}', '{ element['path'] }') ;"
        elif "sprite" in element['path']:
            loader_string = f"game.load.spritesheet('{name}', '{ element['path'] }', \u007b frameWidth: 50, frameHeight: {element['height']}, startFrame:0, endFrame:2\u007d) ;"
        else:
            loader_string = "bad folder"
        print(loader_string)

def parse_folder_and_create_list(folder):
    for root, dirs, files in os.walk(folder):
        # find_folder_name(root)
        print(f"//{root}")
        list= create_image_list(root)
        create_phaser_loader_from_names(list)




# list = create_image_list()
# print (create_phaser_loader_from_names(list, "sprite"))
parse_folder_and_create_list(root_path)
