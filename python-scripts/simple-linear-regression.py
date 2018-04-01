import numpy
import matplotlib.pyplot as plt
import sys
import pandas

def main(p):
    pathtocsv = 'H:/Projects/somemodlessomedata/uploaded-datasets/' + p
    filename = p[:-4]

    df = pandas.read_csv(pathtocsv)
    X = numpy.array(df['X']) # convert data to numpy arrays
    Y = numpy.array(df['Y'])

    # apply the equations
    n = X.size
    denominator = n * X.dot(X) - X.sum()**2
    a = (n * X.dot(Y) - Y.sum() * X.sum()) / denominator
    b = (Y.sum() * X.dot(X) - X.sum()*X.dot(Y)) / denominator

    Yprediction = a*X + b

    # how good is the model ?   
    #d1 = Y - Yprediction
    #d2 = Y - Y.mean()
    #SSres = d1.dot(d1)
    #SStot = d2.dot(d2)

    # RSq = 1 - SSres / SStot # the closest to 1 the better (0.9911 in this case)

    plt.scatter(X, Y, label='exprected (real values)', color='blue')
    plt.xlabel("X")
    plt.ylabel("Y")
    plt.plot(X, Yprediction, label='prediction (ax+b)', color='red')
    plt.legend()
    plt.savefig('H:/Projects/somemodlessomedata/public/img/' + filename + '.png')


p = sys.argv[1]

if(p != 'undefined' and p != 'undefined\r'):
    main(p)
