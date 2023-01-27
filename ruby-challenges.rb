# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water'] 

# Psuedocode
# create a method that takes in an array and character
# use the select method to return a new array
# use the do method to pass each word in the array
# use the include method to see if any word in the array contains a specified character

def word_char_locator (array, char)
    array.select do |word|
        word.include?(char)
    end
end

p word_char_locator(beverages_array, letter_o)
# Output: ["coffee", "soda water"]
p word_char_locator(beverages_array, letter_t)
# Output: ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Psuedocode
# create a method that takes in a hash
# use the values method to check the values in the hash
# use the flatten methed to remove nested arrays and have one array
# use the sort method to sort states in alphabetical order

def hash_state_sorter states
    states.values.flatten.sort
end

p hash_state_sorter(us_states)
# Output: ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Psuedocode
# Create a class name Bike
# Use method to to set model, wheels, and current speed
# Use initialize method for model, wheels, and current speed
# Create a method with bike information (model, wheels, current speed)
# Create a method to increase speed of bike
# Create a method to decrease speed of bike
    #  Use teranary operator to determine if the speed is at 0 or below to prevent speed from going negative

class Bike
    attr_accessor :model, :wheels, :current_speed

    def initialize model
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster speed
        @current_speed += speed
    end
    def brake speed
        @current_speed -= speed
        @current_speed <= 0 ? @current_speed = 0 : @current_speed
    end

end

#-----3a Answers:
my_bike = Bike.new('Trek')
p my_bike.bike_info
# Output: "The Trek bike has 2 wheels and is going 0 mph."

my_bike_2 = Bike.new('Schwinn')
p my_bike_2.bike_info
# Output: "The Schwinn bike has 2 wheels and is going 0 mph."

#-----3b Answers:
my_bike.pedal_faster(10)
p my_bike.bike_info
# Output: "The Trek bike has 2 wheels and is going 0 mph."

my_bike.pedal_faster(18)
p my_bike.bike_info
# Output: "The Trek bike has 2 wheels and is going 10 mph."

my_bike.brake(5)
p my_bike.bike_info
# Output: "The Trek bike has 2 wheels and is going 28 mph."

my_bike.brake(25)
p my_bike.bike_info
# Output: "The Trek bike has 2 wheels and is going 23 mph."
