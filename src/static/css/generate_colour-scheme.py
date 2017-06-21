#this generates a colour scheme

import time

FILE_NAME_IN = 'colours.scss'
FILE_NAME_OUT = 'colour-test.css'

PATTERN = ".%s : {background-color: %s};\n"

file_in = open(FILE_NAME_IN, 'r')
file_out = open(FILE_NAME_OUT, 'w')

def generateCSSHeader():
    file_out.write("/* Auto-generated file */\n")
    file_out.write("/* Last Generated: %s */\n" % (time.strftime("%Y-%m-%d %H:%M") )
    )

def generateCSS(name, colour):
    className = name.strip('$')
    file_out.write(PATTERN % (className, colour) )

if __name__ == "__main__":
    print( "Generating CSS file from %s ... " % (FILE_NAME_IN))
    generateCSSHeader()
    for line in file_in.readlines():
        line.strip('\n')

        if '$' in line:
            line = line.split(':')
            generateCSS(line[0], line[1])
    print( "...Done. File created: %s" % (FILE_NAME_OUT))
