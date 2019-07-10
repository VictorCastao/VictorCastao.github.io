import csv

arquivo = open('Agenda.csv')
ler = csv.reader(arquivo)
dados = list(ler)
print(dados)