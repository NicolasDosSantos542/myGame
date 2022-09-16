from email.mime import image
import os
print(os.getcwd())
from PIL import Image
import glob

root_path = 'sidescroll/game/assets/onix'
def create_image_list():
    image_list = []
    for filename in glob.glob(root_path+'/*.png'): #assuming gif
        im=Image.open(filename)

        image_list.append({
            "name" :find_image_name_from_path(filename),
            "path" : filename,
            "width" : im.width,
            "height" : im.height })
    print(image_list)
    return image_list


def find_image_name_from_path(path):
    return os.path.basename(path)
    

def create_phaser_loader_from_names(dict, image_or_sprite = ""):
    for element in dict:
        name = os.path.splitext(element["name"])[0]
        if image_or_sprite == "image":
            loader_string = f"game.load.image('{name}', '{ element['path'] }') ;"
        elif image_or_sprite == "sprite":
            loader_string = f"game.load.spritesheet('{name}', '{ element['path'] }', \u007b frameWidth: 50, frameHeight: {element['height']}, startFrame:0, endFrame:2\u007d) ;"
        else:
            loader_string = "no parameter or bad string in parameter"
        # print(type(element))
        print(loader_string)



list = create_image_list()
print (create_phaser_loader_from_names(list, "sprite"))

