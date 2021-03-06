import requests
import json

def ocr_space_file(filename, overlay=False, api_key='0d81fdfa7a88957', language='en'):
    """ OCR.space API request with local file.
        Python3.5 - not tested on 2.7
    :param filename: Your file path & name.
    :param overlay: Is OCR.space overlay required in your response.
                    Defaults to False.
    :param api_key: OCR.space API key.
                    Defaults to 'helloworld'.
    :param language: Language code to be used in OCR.
                    List of available language codes can be found on https://ocr.space/OCRAPI
                    Defaults to 'en'.
    :return: Result in JSON format.
    """

    payload = {'isOverlayRequired': overlay,
               'apikey': '0d81fdfa7a88957',
               'language': language,
               }
    with open(filename, 'rb') as f:
        r = requests.post('https://api.ocr.space/parse/image',
                          files={filename: f},
                          data=payload,
                          )
    # return r.content.decode()
    return r.json();


def ocr_space_url(url, overlay=False, api_key='0d81fdfa7a88957', language='en'):
    """ OCR.space API request with remote file.
        Python3.5 - not tested on 2.7
    :param url: Image url.
    :param overlay: Is OCR.space overlay required in your response.
                    Defaults to False.
    :param api_key: OCR.space API key.
                    Defaults to 'helloworld'.
    :param language: Language code to be used in OCR.
                    List of available language codes can be found on https://ocr.space/OCRAPI
                    Defaults to 'en'.
    :return: Result in JSON format.
    """

    payload = {'url': url,
               'isOverlayRequired': overlay,
               'apikey': '0d81fdfa7a88957',
               'language': language,
               }
    r = requests.post('https://api.ocr.space/parse/image',
                      data=payload,
                      )
    return r.content.decode()  


# Use examples:
test_file = ocr_space_file(filename='sample4.jpg', language='eng')
test_url = ocr_space_url(url='http://i.imgur.com/31d5L5y.jpg') 
f = open("filename.txt", 'w')
f.write(str(test_file))
data = json.dumps(test_file)
data  = json.loads(data)
data = json.loads(str(data['ParsedResults']))
print(data[0]['ParsedText'])
