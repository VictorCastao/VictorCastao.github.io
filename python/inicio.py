#tipos basicos

a = 1 #inteiros
b = 1.2 #ponto flutuante
c = 'c' #string
d = "lorem ipsum noldo" #string
e = d[3] #caractere
print(a,b,c,d,e)

#operadores matematicos: + - * / // % **

x = 1+2  #soma
y = 4-3  #subtração
z = 5/2  # divisão ponto flutuante
w = 5//2 #divisão inteira
u = 5%2  # módulo (resto da divisão)
v = 5**2 # potência (elexvado a)
t = 25**0.5 #raiz
print(x,y,z,w,u,v,t)

#conversão entre tipos

r = int (5.0)
s = float (5)
f = str (r)
g = int("23") + 2
print(r,s,f,g)

#string

msg = 'The quick brown fox jumps over the lazy dog'
print (msg[0], len(msg))
s0 = msg[4:9]
print (msg, s0)
s1 = msg[40:]
print ('1:',s1)
s2 = msg[:3]
print ('2:',s2)
s3 = msg[-8:]
print ('3:',s3)
s4 = msg[-8:-4]
print ('4:',s4)
s5 = msg[-1:]
print ('5:',s5)
s8 = msg.upper()
print ('8:',s8)
s9 = msg.lower()
print ('9:',s9)
msga = "    integral eh antiderivada     "
print(msga.strip())
msgb = "\t \t 3;4.5;6;-7.6;cardio;XX\n".strip()
print (msgb.split(';'))
print (s8 + '' + msga.strip()) #operador + concatena strings

#caracteres de escape: \?, onde ? é um 'comando'
#\n = nova linha
#\t = tab (identação)
#\\ = \
#\' = '
#\" = "
caracteres = '\n\t\'\\\"'
print (caracteres)

#Arrays / Listas

li = [1,'2',3.5,4,"jimmy".upper] #upper sem () informa o endereço de memória
print (li)

#Lógica Booleana
q0 = True #começa com letra maiuscula
q1 = False #começa com letra maiuscula
q2 = q0 and q1
q3 = q0 or q1
q4 = not q3

#Decisão
if q4 and not q3:
    print ('Olá')
elif q1 and not q2:  #elif é igual o elsif do C
    print ('Eitcha')
else:
    print('Tchau')


#Comparações
print(3 > 4)
print(3 >= 4)
print(3 < 4)
print(3 <= 4)
print(3 == 4)
print(3 != 4, not (3 == 4))

#Lista
li = [1,'2',3.5,4,"jimmy".upper]
print (li, len(li))
#método append insere elementos na lista
li.append ('novo elemento')
print(li)
print (list(range(1,4)) + ['****'] + [5,6,7])
#referencia na lista igual a da string
print (li [:3])

#Laço
print ('Laço:')
stri = ''
for i in range(5, 52, 3):
    stri += str(i) + ' '
print (stri)

for i in range(10):
    stri += str(i) + ' '
print (stri)

li = [1,2,3,4,5,6,7]
stri = ''
for el in li:
    stri += str(el) + ' '
print (stri)

#coisas chiques

li0 = list (range(1,30,2))
print (li0)
li1 = list (i**2 for i in li0)
print (li1)
li2 = list (e for e in li0 if e%3 == 0)
print (li2)
