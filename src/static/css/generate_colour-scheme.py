#this generates a colour scheme

import time
import json

FILE_NAME_IN = 'colours.scss'
FILE_NAME_OUT = 'colour-scheme.css'
FILE_NAME_OUT_JSON = 'colour.json'

PATTERN = ".%s {background-color: %s}\n"
PATTERN_JSON = " \"%s\": %s"

file_out = open(FILE_NAME_OUT, 'w')
file_out_json = open(FILE_NAME_OUT_JSON, 'w')

def generateHeader(fileLink):
    fileLink.write("/* Auto-generated file */\n")
    fileLink.write("/* Last Generated: %s */\n" % (time.strftime("%Y-%m-%d %H:%M") )
    )

def generateFooter(fileLink):
    fileLink.write

def generateCSS(name, colour):
    file_out.write(PATTERN % (name, colour) )

def generateCSSFile(file_out, file_in):
    generateHeader(file_out)
    for line in file_in.readlines():
        line.strip('\n')

        if '$' in line:
            line = line.split(':')
            line[0] = line[0].strip('$')
            generateCSS(line[0], line[1])
    print( "...Done. File created: %s" % (file_out))

def generateJSONKey(key, value, index):
    if key is not '':
        if index > 1:
            print index
            file_out_json.write(',\n')
        file_out_json.write(PATTERN_JSON % (key, json.dumps(value)) )

def generateJSONfile(file_out, file_in):
    file_out.write("{ \n")

    key = ''
    classArray = []
    count = 0

    for line in file_in.readlines():
        line.strip('\n')

        if '//' in line:
            if classArray is not []:
                generateJSONKey(key, classArray, count)
                print count
                count += 1
            classArray = []
            key = line.strip('//').strip('\n')

        if '$' in line:
            line = line.strip('$').split(':')
            classArray.append(line[0])

    file_out.write("} \n")
    print( "...Done. File created: %s" % (file_out))


if __name__ == "__main__":
    print( "Generating CSS file from %s ... " % (FILE_NAME_IN))

    file_in = open(FILE_NAME_IN, 'r')
    generateCSSFile(file_out, file_in)
    file_in = open(FILE_NAME_IN, 'r')
    generateJSONfile(file_out_json, file_in)
