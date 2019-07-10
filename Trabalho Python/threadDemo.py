import threading, time
print('começou')

def takeANap():
    time.sleep(5)
    print('Corda maluco')

threadObj = threading.Thread(target=takeANap)
threadObj.start()

print('Cabou-se')