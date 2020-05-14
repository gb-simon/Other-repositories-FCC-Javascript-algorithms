def ifeven(list_): # 1
    total = sum(list_[i] % 2 for i in (0, 1, 2)) # 1, 2, 3
    r_avg = round(total / 3.0)
    return r_avg == 0

def find_outlier(integers):
    even =  ifeven(integers)
    new = [i % 2 for i in integers] # 3
    loc = new.index(1 if even else 0) # 4
    return integers[loc]