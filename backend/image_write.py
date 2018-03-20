from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw 

with open('extras/file') as f:
    lines = f.read().splitlines()
with open('extras/value') as f:
    value = f.read().splitlines()  
# print(len(lines)) 
# print(len(value))    

img = Image.open("media/input/sample.jpg").convert('RGB')
draw = ImageDraw.Draw(img)
# font = ImageFont.truetype(<font-file>, <font-size>)
font = ImageFont.truetype("font/arial.ttf", 18)
# draw.text((x, y),"Sample Text",(r,g,b))
for x in range(len(lines)):
    lines[x] = lines[x].split(',') 
    # draw.text((int(lines[x][0]), int(lines[x][1])),int(value[x]),(0,0,0),font=font)  
    draw.text((int(lines[x][0]), int(lines[x][1])),value[x],(0,0,0),font=font)  

img.save('media/output/sample-out.jpg')