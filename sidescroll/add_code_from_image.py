from email.mime import image
import os
print(os.getcwd())
from PIL import Image
import glob

root_path = 'sidescroll/game/assets/onix'
def create_image_list():
    image_list = []
    for filename in glob.glob(root_path+'/*.png'): #assuming gif
        # im=Image.open(filename)

        image_list.append({"name" :find_image_name_from_path(filename), "path" : filename})
    print(image_list)
    return image_list
# for root, dirs, files in os.walk('/sidescroll/assets'):
#     print('toto')
#     print(root, dirs, files)

def find_image_name_from_path(path):
    return os.path.basename(path)

def create_phaser_loader_from_names(dict):
    for element in dict:
        # print(type(element))
        name = os.path.splitext(element["name"])[0]
        loader_string = f"    game.load.image('{name}', '{ element['path'] }', \u007b frameWidth: 50, frameHeight: 50, startFrame:0, endFrame:2\u007d) ;"
        print(loader_string)


list = create_image_list()
print (create_phaser_loader_from_names(list))

