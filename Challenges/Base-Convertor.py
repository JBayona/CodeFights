
#You've heard of bit.ly, ow.ly, and maybe even adf.ly? Well, today I am introducing CodeFightly!

#Like those other companies, CodeFightly uses HTTP redirects to shorten URLs. Also like those other companies, they do so by assigning a "code" (e.g. 2bJzULM) to your long URL that can be used to look that long URL up when a visitor types the code in at the end of the short URL (e.g. http://bit.ly/2bJzULM).

#The codes at CodeFightly are actually just incrementing numbers but they have been shortened by converting them into strings of letters. The CodeFightly engineers could have just made "a" = 0, "b" = 1, "ba" = 26 or something similarly simple. But, they wanted the codes to seem a little more random. So, they created a system where the letters (and other symbols) in the code are in a custom-ordered alphabet.

#Your mission is the use this alphabet and a code to figure out what the next numerical code will be.

#Example

#For alphabet = "abcdefg" and code = "bbbb",
#the output should be
#CodeFightly(alphabet, code) = "bbbc".

#For alphabet = "a1b2c3" and code = "b333",
#the output should be
#CodeFightly(alphabet, code) = "2aaa".

#For alphabet = ".Calvin" and code = "nnnnn",
#the output should be
#CodeFightly(alphabet, code) = "C.....".

#Note that the alphabets can have characters beyond just letters and that the next code might actually be longer than the previous one.

result = []
def CodeFightly(alphabet, code):
    l = list(alphabet) #Convierte un string en un array,lista
    c = list(code)	#Convierte un string en un array,lista
    base = len(alphabet) #Obtiene la longitud de una cadena
    #print l
    #print c
    #array = map(lambda a: c.index(a),l)
    #Get the index where we have the elements [2,5,5,5]
    l2 = map((lambda x: l.index(x)), c) #Recorre el aray de c(code) y crea un nuevo array con las posiciones de esos elelentos en alphabet
    #print(l2)
    convert = 1 + reduce( (lambda prev, current: prev*base+current), l2 ) #reduce de l2 para convertirlo en base y sumar uno en base al algoritmo
    #print convert
    convert2 = accumulate(base,convert) #Se hace la función recursiva para volverlo a pasar a los índices como lo teníamos desde un inicio
    #print(convert2)
    l3 = map((lambda x: l[x]), convert2) #Recorremos ese arreglo ya convertido para imprimir el arreglo original (alphabet) indicando el 
	#resultado de la conversión en base a la suma y a los elementos del array
    #print l3
    return ''.join(l3) #Esto conviere el array en string, i.e [2,a,a,a] = 2aaa
    
def accumulate(base,input):
    if input == 0:return result
    result.insert(0, input%base)
    return accumulate(base,(input//base))
	
alphabet = "a1b2c3"
code = "b333"
print(CodeFightly(alphabet,code))