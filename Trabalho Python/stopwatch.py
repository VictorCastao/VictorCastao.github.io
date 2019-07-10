import time
print('Pressione enter para começar o cronômetro e ctrl-c para sair')
input()
print('valendo')
start_time = time.time()
last_time = start_time
lapNum = 1
try:
    while True:
        input()
        lapTime = round(time.time() - last_time,2)
        totalTime = round(time.time() - start_time, 2)
        print('Lap	#%s:	%s	(%s)'	%	(lapNum,	totalTime,	lapTime),	end='')
        lapNum += 1
        last_time = time.time()
except KeyboardInterrupt:
        print('\nDone.')
