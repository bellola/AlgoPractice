def numDuplicates(name, price, weight):
    # Write your code here
    q=[]
    counter=0
    for a,b,c in zip(name,price,weight):
        x=(a,b,c)
        q.append(x)
    l=len(q)
    w=set(q)
    e=len(w)
    return (l-e)

def dup(name, price, weight):
    l = list(zip(name, price, weight))
    return(len(l)-len(set(l)))
    