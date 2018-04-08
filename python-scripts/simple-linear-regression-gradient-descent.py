import numpy
import matplotlib.pyplot as plt
import pandas
import sys

def main():
    datasets_path = sys.argv[1]
    img_path = sys.argv[2]
    csv = sys.argv[3]
    
    csv_file_name = csv[:-4] # removing the .csv file ext
    learning_rate = float(sys.argv[3])

    if(not(datasets_path != 'undefined' and csv != 'undefined' and img_path != 'undefined')):
        print('Invalid path')
        return

    df = pandas.read_csv(datasets_path + csv)
    N = df.shape[0]

    if(df.shape[1] != 2):
        print('Invalid dataset')
        return
    

    X = df['X'].values
    Y = df['Y'].values
    a = 1
    b = 0

    for i in range(N):
        error = Y[i] - (a*X[i] + b)
        a = a + learning_rate*(error*X[i])
        b = b + error * learning_rate

    # todo : scatter does not work for some reason
    plt.xlabel('X')
    plt.ylabel('Y')
    plt.scatter(X, Y, label='data values', color='red')
    plt.plot(X, a*X + b, label='line of best fit', color='blue')
    plt.legend()
    plt.savefig(img_path + csv_file_name + '.png')
    print(csv_file_name + '.png')
