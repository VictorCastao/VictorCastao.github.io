import subprocess, time, datetime, csv
exampleFile	= open ('xds.csv') 
exampleReader =	csv.reader(exampleFile) 
exampleData	= list(exampleReader) 
tempo = datetime.datetime(exampleData[0][1])

while tempo < datetime.datetime.now():
    time.sleep(1)
subprocess.Popen(exampleData[0][0])

