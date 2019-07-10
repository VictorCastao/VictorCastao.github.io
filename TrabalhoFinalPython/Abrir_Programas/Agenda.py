#Projeto: Agenda de Programas
# -- Observações Importantes --
#1- A lista em csv deve conter apenas programas (ao informar pastas, por exemplo, ocorre um erro)
#2- A primeira coluna do csv se refere aos programas, que devem estar na forma -> "C:\Program Files (x86)\Arduino\arduino.exe"
#3- A segunda coluna do csv se refere aos horários, que devem estar na forma -> "2019/7/20 11:41:10"
#4- Nome do programa e horário devem ser separados por vírgula e sem espaço entre eles
#5- No arquivo csv, os programas, com seus respectivos horários, devem estar em ordem cronológica
#6- O arquivo py e csv devem estar no mesmo diretório para funcionar

#Importação de bibliotecas necessárias
import csv, subprocess, time, datetime

#Definição de variáveis
arquivo = open('Agenda.csv')  # Abre o arquivo csv
leitor = csv.reader(arquivo)  # Lê os dados do arquivo
listar = list(leitor)  # Lista os dados encontrados 

#A função a seguir converte o horário informado para um formato possível de ser usado no comando "for"
def transformar_horario (linha,coluna): # Função
    return datetime.datetime.strptime(listar[linha][coluna], '%Y/%m/%d	%H:%M:%S') # Formatação do horário

#O comando "for" a seguir abre os programas no horário especificado
for i in range(0,len(listar)): #Intervalo de atuação (nesse caso, todas as linhas do csv)
    while datetime.datetime.now() < transformar_horario(i,1): #Enquanto o horário definido na linha i não chega...
        time.sleep(1) #... o código fica pausado
    subprocess.Popen(listar[i][0]) # Após chegar o horário, executa-se um comando para abrir o programa definido na linha i
