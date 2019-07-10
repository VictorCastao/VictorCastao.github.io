import datetime, time	
desperta = datetime.datetime(2019,7,9,21,23,0)
while datetime.datetime.now() < desperta:
    time.sleep(1)
print('Cordei')