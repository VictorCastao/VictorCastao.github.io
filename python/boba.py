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