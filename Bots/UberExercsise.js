Being a new Uber user, you have $20 off your first ride. You want to make the most out of it and drive in the fanciest car you can afford, without spending any out-of-pocket money. There are 5 options, from the least to the most expensive: "UberX", "UberXL", "UberPlus", "UberBlack" and "UberSUV".

You know the length l of your ride in miles and how much one mile costs for each car. Find the best car you can afford.

Example

For l = 30 and fares = [0.3, 0.5, 0.7, 1, 1.3], the output should be
fancyRide(l, fares) = "UberXL".

The cost for the ride in this car would be $15, which you can afford, but "UberPlus" would cost $21, which is too much for you.

Input/Output

[time limit] 4000ms (js)
[input] integer l

A positive number representing the length of the ride.

Constraints:
4 ≤ l ≤ 30.

[input] array.float fares

A strictly increasing array of 5 elements. fares[0] stands for dollars per mile in "UberX", fares[1] is the same for "UberXL", etc.

Constraints:
0.3 ≤ fares[i] ≤ 5.0.

[output] string

The car that you should choose: "UberX", "UberXL", "UberPlus", "UberBlack" or "UberSUV". It is guaranteed that you can afford at least one of them.




Consider an Uber-City where the only passenger vehicles on the roads are self-driving Uber cars. Since all the cars are self-driving, you could synchronize the car speeds in such a way that traffic lights would be obsolete.

As a first step you need to implement an algorithm that would check whether removing traffic lights at a given intersection of two one-way roads will lead to a car crash.

For each road you know when a car will approach the crossroads. You also know how long it takes to cross the crossroads.

Example

For road1 = [1, 5, 6, 7], road2 = [3, 10] and crossTime = 2, the output should be
crossroads(road1, road2, crossTime) = false.

The cars will cross the crossroads in the following order without colliding: road1[0], road2[0], road1[1], road1[2], road1[3], road2[2].

For road1 = [2], road2 = [3] and crossTime = 2, the output should be
crossroads(road1, road2, crossTime) = true.

The car on the first road will not make it when the car from the second road appears since crossing the intersection takes 4 seconds.

Input/Output

[time limit] 4000ms (js)
[input] array.integer road1

A strictly increasing array of positive integers which define the times (in seconds) when a new car approaches the crossroads by the first road.

Constraints:
1 ≤ road1.length ≤ 10,
1 ≤ road1[i] ≤ 40.

[input] array.integer road2

A strictly increasing array of positive integers which define the times (in seconds) when a new car approaches the crossroads by the second road.

Constraints:
0 ≤ road2.length ≤ 10,
1 ≤ road2[i] ≤ 40.

[input] integer crossTime

The number of seconds it takes for a car to cross the crossroads.

Constraints:
1 ≤ crossTime ≤ 10.

[output] boolean

true if removing the traffic lights will cause a collision, false otherwise.

road1: [1, 5, 6, 7]
road2: [3, 10]
crossTime: 2
Output:
Empty
Expected Output:
false
Console Output:
Empty

road1: [2]
road2: [3]
crossTime: 2
Output:
Empty
Expected Output:
true
Console Output:
Empty

road1: [25]
road2: [10, 30]
crossTime: 6
Output:
Empty
Expected Output:
true
Console Output:
Empty

road1: [1, 2, 5, 6]
road2: [3, 4]
crossTime: 1
Output:
Empty
Expected Output:
false
Console Output:
Empty

road1: [11]
road2: [7, 16, 22]
crossTime: 5
Output:
Empty
Expected Output:
true
Console Output:
Empty

road1: [1, 3, 5, 7, 9]
road2: [2, 4, 6, 8, 10, 12]
crossTime: 2
Output:
Empty
Expected Output:
true
Console Output:
Empty

road1: [1]
road2: []
crossTime: 1
Output:
Empty
Expected Output:
false
Console Output:
Empty
