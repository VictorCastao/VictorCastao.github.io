# tipos de dados
a = None 
if a is None:
    print ("Nada!")

b = list (i for i in range(5))
b = None
if not (b is None):
    print(b)

lista = [2,3,4,5]
tupla = tuple() #tupla vazia
tupla = (2,3,4,5) 
print(lista, tupla)

dic = dict() #dicionario vazio
dic = {
    'zero' : 0,
    'um' : 1,
    'dois' : 2,
    'três' : 3,
}
print(dic['dois'])
msg = 'Custa dois reais'
novamsg = []
for palavra in msg.split():
    if palavra in dic.keys():
        novamsg.append(str(dic[palavra]))
    else:
        novamsg.append(palavra)
novamsg = ' '.join(novamsg)
print(novamsg)

dic = {
    "I'm" : "Eu estou",
    "green" : "verde",
    "apple" : "maçã",
    "eating" : "comendo",
}
msg = "I'm eating a green apple"
traducao = []
for palavra in msg.split():
    if palavra in dic.keys():
        traducao.append(dic[palavra])
    else:
        traducao.append(palavra)
print(' '.join(traducao))
print(dic.values())
print(dic.items())

#Funções
def imprime(x):
    '''
    imprime qualquer coisa
    '''
    print(x)

imprime ('============')
imprime(2)
imprime('Olá mundo')
imprime(dic)
imprime((2,3))
imprime (None)
imprime([True, False])


def distancia(a,b):
    """
    a e b são linhas, tuplas, etc com no minimo dois elementos

    """
    return((a[0] - b[0])**2 + (a[1] - b[1]) **2) **0.5

imprime(distancia)
imprime(distancia( (0,0) , (3,4) ))
imprime(distancia( [0,0] , [3,4] ))
imprime(distancia( (0,0) , [3,4,4,3,5,32,2] ))

def divisaointeira(x,y):
    '''
    x, y são números
    retorna quociente, resto, flag maior que 1, flag denominador 0

    '''
    if y != 0:
        return x//y, x%y, x>y, False
    else:
        return x//y, x%y, x>y, True 
#quociente, resto = divisaointeira(15,8)
quociente, _, _, denominadorzero = divisaointeira(15,8)
_, resto, maiorque1, _ = divisaointeira(15,8)

print('Quociente: ', quociente, 'Resto: ', resto)
print('>1: ', maiorque1, '/0: ', denominadorzero)

def mapear(funcao, lista):
    '''
    aplica uma função a cada elemento da lista
    '''
    return list(funcao(elemento) for elemento in lista)

def quadrado(x):
    '''
    eleva o numero ao quadrado
    '''
    return x**2

def raiz(x):
    '''
    calcula a raiz quadrada do numero
    '''
    return x**0.5

lista = list (i for i in range (11))
print (lista)
print (mapear(quadrado, lista))
print (mapear(raiz, lista))

#String multilinha, que serve como help da funcao
"""
efnefnkjefs
dscdv
sdedswe
edscvfv
lorem ipsumefew edcf
yfttttffiuyb
"""