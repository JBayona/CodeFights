from collections import Counter
def createAnagram(s, t):
    return sum((Counter(t) - Counter(s)).values())