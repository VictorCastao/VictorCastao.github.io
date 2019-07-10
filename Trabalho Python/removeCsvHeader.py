import csv,os

#Passo 1 - Loop para encontrar os arquivos CSV
os.makedirs('headerRemoved', exist_ok=True)

for csvFilename in os.listdir('.'):
    if not csvFilename.endswith('.csv'):
        continue
    print ('Removing header from' + csvFilename + '...')

#Passo 2 - Ler o arquivo CSV
csvRows	=	[]				
csvFileObj	=	open(csvFilename)				
readerObj	=	csv.reader(csvFileObj)				
for	row	in	readerObj:								
    if	readerObj.line_num	==	1:												
        continue				
    csvRows.append(row)				
csvFileObj.close()

#Passo 3 - Gravar novo arquivo
for csvFilename in os.listdir('.'):
    if not csvFilename.endswith('.csv'):
        continue
    csvFileObj	=	open(os.path.join('headerRemoved',	csvFilename),	'w',		newline='')
    csvWriter	=	csv.writer(csvFileObj)				
    for	row	in	csvRows:								
        csvWriter.writerow(row)				
    csvFileObj.close() 
