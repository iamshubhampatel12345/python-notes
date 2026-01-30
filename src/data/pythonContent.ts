export const pythonContent: Record<string, any> = {
  'intro-python': {
    title: 'Introduction to Python',
    description: 'Learn about Python, its history, applications, and how to get started with this powerful programming language.',
    sections: [
      {
        type: 'heading',
        content: 'What is Python?',
      },
      {
        type: 'text',
        content: 'Python is a high-level, interpreted programming language known for its simple and readable syntax. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability and allows programmers to express concepts in fewer lines of code.',
      },
      {
        type: 'heading',
        content: 'Why Learn Python?',
      },
      {
        type: 'list',
        content: [
          'Easy to learn and read - Python syntax is similar to English',
          'Versatile - Used in web development, data science, AI, automation, and more',
          'Huge community - Millions of developers and extensive libraries',
          'High demand - One of the most sought-after skills in the job market',
          'Cross-platform - Works on Windows, Mac, and Linux',
        ],
      },
      {
        type: 'heading',
        content: 'Python 2 vs Python 3',
      },
      {
        type: 'text',
        content: 'Python 2 was discontinued in 2020. Python 3 is the current and future version with improved features, better Unicode support, and modern syntax. Always use Python 3 for new projects.',
      },
      {
        type: 'heading',
        content: 'Applications of Python',
      },
      {
        type: 'list',
        content: [
          'Web Development (Django, Flask)',
          'Data Science & Machine Learning (Pandas, NumPy, TensorFlow)',
          'Automation & Scripting',
          'Desktop Applications',
          'Game Development',
          'Cybersecurity & Penetration Testing',
        ],
      },
      {
        type: 'heading',
        content: 'Your First Python Program',
      },
      {
        type: 'text',
        content: 'Let\'s write the classic "Hello, World!" program:',
      },
      {
        type: 'code',
        content: 'print("Hello, World!")',
      },
      {
        type: 'note',
        content: 'That\'s it! Just one line to display text. Notice how readable and simple Python is compared to other languages.',
      },
      {
        type: 'heading',
        content: 'Python IDEs & Tools',
      },
      {
        type: 'list',
        content: [
          'VS Code - Lightweight and popular code editor',
          'PyCharm - Full-featured Python IDE',
          'Jupyter Notebook - Great for data science and learning',
          'IDLE - Comes built-in with Python installation',
        ],
      },
    ],
  },

  'python-basics': {
    title: 'Python Basics',
    description: 'Master the fundamental building blocks of Python including variables, data types, and input/output operations.',
    sections: [
      {
        type: 'heading',
        content: 'Variables',
      },
      {
        type: 'text',
        content: 'Variables are containers that store data. In Python, you don\'t need to declare the type - Python figures it out automatically (dynamic typing).',
      },
      {
        type: 'code',
        content: `# Creating variables
name = "John"
age = 25
height = 5.9
is_student = True

print(name)    # Output: John
print(age)     # Output: 25`,
      },
      {
        type: 'heading',
        content: 'Variable Naming Rules (IMPORTANT)',
      },
      {
        type: 'text',
        content: 'Python has strict rules for naming variables. Following these rules is mandatory:',
      },
      {
        type: 'list',
        content: [
          'Variable names must start with a letter (a-z, A-Z) or underscore (_)',
          'After the first character, can contain letters, numbers (0-9), and underscores',
          'Variable names are case-sensitive (age, Age, and AGE are different)',
          'Cannot use Python keywords (if, for, while, class, etc.)',
          'No spaces or special characters (!@#$%^&*-+)',
          'Should be descriptive and follow snake_case convention',
        ],
      },
      {
        type: 'code',
        content: `# VALID variable names
name = "Alice"
user_name = "Bob"
_temp = 10
value1 = 20
user_2 = 30
_private_var = 40
__double_underscore = 50

# INVALID variable names (will cause errors)
# 2name = "Error"        # Can't start with number
# user-name = "Error"    # Hyphens not allowed
# user name = "Error"    # Spaces not allowed
# for = "Error"          # Can't use keywords
# user@email = "Error"   # Special characters not allowed
# my-var = "Error"       # Dash is not allowed

# Case sensitivity demonstration
age = 25
Age = 30
AGE = 35
print(age, Age, AGE)  # 25 30 35 - All different variables!`,
      },
      {
        type: 'heading',
        content: 'Python Keywords (Reserved Words)',
      },
      {
        type: 'text',
        content: 'Keywords are special words reserved by Python. You cannot use them as variable names:',
      },
      {
        type: 'code',
        content: `# Complete list of Python keywords (Python 3.x)
import keyword
print(keyword.kwlist)

# Common keywords you'll use:
# False, True, None
# if, elif, else
# for, while, break, continue, pass
# def, return, lambda
# class, self
# import, from, as
# try, except, finally, raise
# and, or, not, is, in
# with, yield, assert
# del, global, nonlocal

# You can check if a word is a keyword
print(keyword.iskeyword('for'))    # True
print(keyword.iskeyword('name'))   # False`,
      },
      {
        type: 'heading',
        content: 'Variable Assignment Techniques',
      },
      {
        type: 'code',
        content: `# Single assignment
x = 10

# Multiple assignment (same value)
a = b = c = 100
print(a, b, c)  # 100 100 100

# Multiple assignment (different values)
name, age, city = "Alice", 25, "NYC"
print(name)  # Alice
print(age)   # 25
print(city)  # NYC

# Swapping variables (Pythonic way)
x = 5
y = 10
x, y = y, x  # Swap without temp variable
print(x, y)  # 10 5

# Unpacking lists
numbers = [1, 2, 3]
a, b, c = numbers
print(a, b, c)  # 1 2 3

# Extended unpacking
first, *middle, last = [1, 2, 3, 4, 5]
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5`,
      },
      {
        type: 'heading',
        content: 'Variable Scope',
      },
      {
        type: 'text',
        content: 'Scope determines where a variable can be accessed. Python has four scope levels: Local, Enclosing, Global, and Built-in (LEGB rule).',
      },
      {
        type: 'code',
        content: `# Global scope
global_var = "I'm global"

def outer_function():
    # Enclosing scope
    enclosing_var = "I'm enclosing"
    
    def inner_function():
        # Local scope
        local_var = "I'm local"
        print(local_var)        # Accessible
        print(enclosing_var)    # Accessible
        print(global_var)       # Accessible
    
    inner_function()
    # print(local_var)  # Error! Not accessible here

outer_function()
# print(enclosing_var)  # Error! Not accessible here

# Global keyword
count = 0

def increment():
    global count  # Declare we're using global variable
    count += 1

increment()
increment()
print(count)  # 2

# Nonlocal keyword
def outer():
    x = 10
    
    def inner():
        nonlocal x  # Refer to enclosing scope variable
        x += 5
        print(x)  # 15
    
    inner()
    print(x)  # 15 (modified by inner function)

outer()`,
      },
      {
        type: 'heading',
        content: 'Data Types',
      },
      {
        type: 'text',
        content: 'Python has several built-in data types:',
      },
      {
        type: 'code',
        content: `# Integers (whole numbers)
count = 100
negative = -50
large_num = 1_000_000  # Underscores for readability

# Float (decimal numbers)
price = 19.99
scientific = 2.5e3  # 2500.0 (scientific notation)
negative_float = -3.14

# String (text)
message = "Hello"
multi_line = """This is a
multi-line
string"""
single_quote = 'Single quotes work too'

# Boolean (True or False)
is_active = True
is_logged_in = False

# NoneType (represents absence of value)
result = None

# Check the type
print(type(count))       # <class 'int'>
print(type(price))       # <class 'float'>
print(type(message))     # <class 'str'>
print(type(is_active))   # <class 'bool'>
print(type(result))      # <class 'NoneType'>`,
      },
      {
        type: 'heading',
        content: 'Type Conversion (Casting)',
      },
      {
        type: 'text',
        content: 'Convert between different data types explicitly:',
      },
      {
        type: 'code',
        content: `# String to Integer
age_str = "25"
age_int = int(age_str)
print(age_int + 5)  # 30

# String to Float
price_str = "19.99"
price_float = float(price_str)
print(price_float)  # 19.99

# Integer to String
number = 42
number_str = str(number)
print("The answer is " + number_str)

# Float to Integer (truncates decimal)
pi = 3.14159
pi_int = int(pi)
print(pi_int)  # 3

# Integer to Float
age = 25
age_float = float(age)
print(age_float)  # 25.0

# Any type to Boolean
print(bool(1))      # True
print(bool(0))      # False
print(bool(""))     # False (empty string)
print(bool("text")) # True
print(bool([]))     # False (empty list)
print(bool([1,2]))  # True

# String to List
text = "hello"
chars = list(text)
print(chars)  # ['h', 'e', 'l', 'l', 'o']`,
      },
      {
        type: 'heading',
        content: 'Type Hints (Python 3.5+)',
      },
      {
        type: 'text',
        content: 'Type hints help document what type a variable should be. They don\'t enforce types but help with code clarity and IDE support:',
      },
      {
        type: 'code',
        content: `# Variable type hints
name: str = "Alice"
age: int = 25
height: float = 5.9
is_student: bool = True

# Function type hints
def greet(name: str) -> str:
    return f"Hello, {name}"

def add(a: int, b: int) -> int:
    return a + b

# Multiple types (Union)
from typing import Union

def process_id(id: Union[int, str]) -> str:
    return str(id)

# Optional (can be None)
from typing import Optional

def find_user(id: int) -> Optional[str]:
    if id == 1:
        return "Alice"
    return None

# List with type hints
from typing import List

numbers: List[int] = [1, 2, 3, 4, 5]
names: List[str] = ["Alice", "Bob", "Charlie"]

# Dictionary with type hints
from typing import Dict

user: Dict[str, Union[str, int]] = {
    "name": "Alice",
    "age": 25,
    "city": "NYC"
}`,
      },
      {
        type: 'heading',
        content: 'Constants (Convention)',
      },
      {
        type: 'text',
        content: 'Python doesn\'t have built-in constants, but by convention, variables in UPPERCASE are treated as constants (should not be changed):',
      },
      {
        type: 'code',
        content: `# Constants (convention - use UPPERCASE)
PI = 3.14159
MAX_USERS = 100
API_KEY = "abc123xyz"
DATABASE_URL = "localhost:5432"
DEBUG_MODE = True

# Use constants in your code
def calculate_circle_area(radius):
    return PI * radius ** 2

print(calculate_circle_area(5))

# Configuration file example
APP_NAME = "My Python App"
VERSION = "1.0.0"
MAX_RETRIES = 3
TIMEOUT_SECONDS = 30`,
      },
      {
        type: 'heading',
        content: 'Input and Output',
      },
      {
        type: 'text',
        content: 'Use print() to display output and input() to get user input:',
      },
      {
        type: 'code',
        content: `# Basic output
print("Hello, Python!")
print("Age:", 25)

# Multiple values
print("Name:", "Alice", "Age:", 25)

# Separator and end parameters
print("A", "B", "C", sep="-")  # A-B-C
print("Hello", end=" ")
print("World")  # Hello World

# Formatted output (f-strings - Python 3.6+)
name = "Alice"
age = 25
print(f"My name is {name} and I'm {age} years old")
print(f"Next year I'll be {age + 1}")

# Format specifiers
price = 19.99
print(f"Price: \${price:.2f}")  # Price: $19.99

number = 42
print(f"Binary: {number:b}")   # Binary: 101010
print(f"Hex: {number:x}")      # Hex: 2a

# Basic input
name = input("Enter your name: ")
print("Hello,", name)

# Input returns string - convert if needed
age = int(input("Enter your age: "))
height = float(input("Enter your height: "))
print(f"You are {age} years old and {height} meters tall")

# Input validation
while True:
    try:
        age = int(input("Enter your age: "))
        break
    except ValueError:
        print("Please enter a valid number!")`,
      },
      {
        type: 'heading',
        content: 'Comments and Documentation',
      },
      {
        type: 'text',
        content: 'Comments help explain code and are ignored by Python:',
      },
      {
        type: 'code',
        content: `# This is a single-line comment

"""
This is a multi-line comment (docstring).
You can write multiple lines here.
Useful for documentation.
"""

'''
You can also use single quotes
for multi-line comments.
'''

x = 10  # You can also add comments at the end of lines

# Docstrings for functions
def calculate_area(width, height):
    """
    Calculate the area of a rectangle.
    
    Args:
        width (float): The width of the rectangle
        height (float): The height of the rectangle
    
    Returns:
        float: The area of the rectangle
    """
    return width * height

# Access docstring
print(calculate_area.__doc__)

# Docstrings for classes
class Person:
    """
    A class to represent a person.
    
    Attributes:
        name (str): Person's name
        age (int): Person's age
    """
    
    def __init__(self, name, age):
        self.name = name
        self.age = age`,
      },
      {
        type: 'heading',
        content: 'Variable Memory and Identity',
      },
      {
        type: 'code',
        content: `# id() function returns memory address
x = 10
print(id(x))  # Memory address

# is vs ==
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)   # True (same values)
print(a is b)   # False (different objects in memory)
print(a is c)   # True (same object)

# Small integers are cached (-5 to 256)
x = 10
y = 10
print(x is y)  # True (same object)

x = 1000
y = 1000
print(x is y)  # False (different objects)

# Delete variables
x = 10
del x
# print(x)  # Error: name 'x' is not defined`,
      },
      {
        type: 'heading',
        content: 'Best Practices for Variables',
      },
      {
        type: 'list',
        content: [
          'Use descriptive names: user_age not ua',
          'Follow snake_case for variables and functions',
          'Use UPPERCASE for constants',
          'Avoid single-letter names except in loops (i, j, k)',
          'Don\'t use built-in names (list, dict, str, etc.)',
          'Keep names concise but meaningful',
          'Use is_/has_/can_ prefix for boolean variables',
          'Initialize variables before use',
        ],
      },
      {
        type: 'code',
        content: `# Good variable names
user_name = "Alice"
total_price = 99.99
is_active = True
has_permission = False
max_retries = 3

# Bad variable names
x = "Alice"           # Not descriptive
userName = "Bob"      # Wrong case (use snake_case)
ISActive = True       # Wrong case
list = [1, 2, 3]      # Shadows built-in
a = 99.99             # Not descriptive

# Boolean variable naming
is_logged_in = True   # Good
has_admin_rights = False  # Good
can_edit = True       # Good
logged_in = True      # Okay, but is_ prefix is clearer`,
      },
      {
        type: 'note',
        content: 'PEP 8 is Python\'s style guide. It recommends using 4 spaces for indentation, meaningful variable names, and adding comments to explain complex logic. Following PEP 8 makes your code more professional and easier for others to read.',
      },
    ],
  },

  'operators': {
    title: 'Operators',
    description: 'Learn how to perform calculations, comparisons, and logical operations in Python.',
    sections: [
      {
        type: 'heading',
        content: 'What are Operators?',
      },
      {
        type: 'text',
        content: 'Operators are special symbols that perform operations on variables and values. Python supports 7 types of operators: Arithmetic, Relational, Logical, Assignment, Bitwise, Identity, and Membership operators.',
      },
      {
        type: 'heading',
        content: '1. Arithmetic Operators',
      },
      {
        type: 'text',
        content: 'Used for mathematical operations on numeric values:',
      },
      {
        type: 'code',
        content: `a = 10
b = 3

# Addition (+)
print(a + b)   # 13
print(5 + 3.5) # 8.5 (works with int and float)

# Subtraction (-)
print(a - b)   # 7
print(10 - 15) # -5 (can result in negative)

# Multiplication (*)
print(a * b)       # 30
print(2.5 * 4)     # 10.0
print("Hi" * 3)    # HiHiHi (works with strings!)

# Division (/) - Always returns float
print(a / b)       # 3.3333333333333335
print(10 / 2)      # 5.0 (float, not int)
print(7 / 2)       # 3.5

# Floor Division (//) - Returns integer part
print(a // b)      # 3
print(7 // 2)      # 3 (discards decimal)
print(-7 // 2)     # -4 (rounds down)
print(10.5 // 2)   # 5.0 (returns float if input is float)

# Modulus (%) - Returns remainder
print(a % b)       # 1
print(10 % 3)      # 1
print(20 % 5)      # 0 (no remainder)
print(7 % 2)       # 1 (odd number check)

# Exponentiation (**) - Power
print(a ** b)      # 1000 (10^3)
print(2 ** 8)      # 256
print(5 ** 2)      # 25 (square)
print(9 ** 0.5)    # 3.0 (square root)
print(8 ** (1/3))  # 2.0 (cube root)

# Unary operators
print(+a)          # 10 (unary plus)
print(-a)          # -10 (unary minus)`,
      },
      {
        type: 'heading',
        content: 'Practical Arithmetic Examples',
      },
      {
        type: 'code',
        content: `# Calculate average
num1, num2, num3 = 85, 90, 78
average = (num1 + num2 + num3) / 3
print(f"Average: $\{average:.2f\}")  # 84.33

# Convert Celsius to Fahrenheit
celsius = 25
fahrenheit = (celsius * 9/5) + 32
print(f"$\{celsius\}°C = $\{fahrenheit\}°F")  # 25°C = 77.0°F

# Calculate compound interest
principal = 1000
rate = 5  # 5%
time = 2  # years
amount = principal * (1 + rate/100) ** time
print(f"Amount after $\{time\} years: $\{amount\}")

# Check if number is even or odd
number = 17
if number % 2 == 0:
    print(f"$\{number\} is even")
else:
    print(f"$\{number\} is odd")

# Find last digit of a number
num = 12345
last_digit = num % 10
print(f"Last digit: $\{last_digit\}")  # 5`,
      },
      {
        type: 'heading',
        content: '2. Relational (Comparison) Operators',
      },
      {
        type: 'text',
        content: 'Used to compare values. Always return True or False (boolean):',
      },
      {
        type: 'code',
        content: `x = 5
y = 10

# Equal to (==)
print(x == y)       # False
print(5 == 5)       # True
print("hello" == "hello")  # True

# Not equal to (!=)
print(x != y)       # True
print(5 != 5)       # False
print("a" != "b")   # True

# Greater than (>)
print(x > y)        # False
print(10 > 5)       # True
print("b" > "a")    # True (alphabetical comparison)

# Less than (<)
print(x < y)        # True
print(10 < 5)       # False

# Greater than or equal (>=)
print(x >= y)       # False
print(5 >= 5)       # True
print(10 >= 5)      # True

# Less than or equal (<=)
print(x <= y)       # True
print(5 <= 5)       # True
print(3 <= 5)       # True

# Chaining comparisons (Pythonic!)
age = 25
print(18 <= age <= 65)  # True
print(1 < 5 < 10)       # True
print(1 < 5 > 3)        # True (5 > 1 AND 5 > 3)`,
      },
      {
        type: 'heading',
        content: 'String and List Comparisons',
      },
      {
        type: 'code',
        content: `# String comparison (lexicographical - alphabetical order)
print("apple" < "banana")   # True
print("Apple" < "apple")    # True (uppercase comes first in ASCII)
print("abc" == "abc")       # True
print("10" > "9")           # False (string comparison, not numeric)

# Case-insensitive comparison
str1 = "Hello"
str2 = "hello"
print(str1.lower() == str2.lower())  # True

# List comparison (element by element)
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = [1, 2, 4]
print(list1 == list2)  # True
print(list1 < list3)   # True (3 < 4)

# Length comparison
print(len("hello") == len("world"))  # True (both 5 chars)`,
      },
      {
        type: 'heading',
        content: '3. Logical Operators',
      },
      {
        type: 'text',
        content: 'Combine multiple conditions. Used for decision making:',
      },
      {
        type: 'code',
        content: `age = 25
has_license = True
has_car = False

# AND (and) - Both conditions must be True
print(age >= 18 and has_license)  # True (both True)
print(age >= 18 and has_car)      # False (one False)
print(True and True)              # True
print(True and False)             # False
print(False and False)            # False

# OR (or) - At least one condition must be True
print(age < 18 or has_license)    # True (one True)
print(age < 18 or has_car)        # False (both False)
print(True or False)              # True
print(False or False)             # False

# NOT (not) - Reverses the boolean value
print(not has_license)             # False
print(not has_car)                 # True
print(not True)                    # False
print(not False)                   # True

# Complex conditions
eligible = age >= 18 and has_license and not has_car
print(eligible)  # True

# Multiple conditions
score = 85
attendance = 90
passed = (score >= 60 and attendance >= 75) or score >= 95
print(passed)  # True`,
      },
      {
        type: 'heading',
        content: 'Logical Operator Truth Tables',
      },
      {
        type: 'code',
        content: `# AND Truth Table
print("AND Truth Table:")
print(f"True and True = {True and True}")      # True
print(f"True and False = {True and False}")    # False
print(f"False and True = {False and True}")    # False
print(f"False and False = {False and False}")  # False

# OR Truth Table
print("\\nOR Truth Table:")
print(f"True or True = {True or True}")        # True
print(f"True or False = {True or False}")      # True
print(f"False or True = {False or True}")      # True
print(f"False or False = {False or False}")    # False

# NOT Truth Table
print("\\nNOT Truth Table:")
print(f"not True = {not True}")                # False
print(f"not False = {not False}")              # True`,
      },
      {
        type: 'heading',
        content: 'Short-Circuit Evaluation',
      },
      {
        type: 'text',
        content: 'Logical operators use short-circuit evaluation - they stop evaluating as soon as the result is determined:',
      },
      {
        type: 'code',
        content: `# AND - stops at first False
result = False and print("This won't print")  # Doesn't print
result = True and print("This will print")    # Prints

# OR - stops at first True
result = True or print("This won't print")    # Doesn't print
result = False or print("This will print")    # Prints

# Practical use - avoid errors
x = 0
# if x != 0 and 10 / x > 2:  # Without short-circuit, would error
if x != 0 and (10 / x) > 2:
    print("Valid")
else:
    print("Invalid")  # This executes

# Return values (not just True/False)
print(5 and 10)        # 10 (returns last evaluated)
print(0 and 10)        # 0 (returns first False)
print(5 or 10)         # 5 (returns first True)
print(0 or 10)         # 10 (returns last if all False)
print(None or "default")  # "default" (useful for defaults)`,
      },
      {
        type: 'heading',
        content: '4. Assignment Operators',
      },
      {
        type: 'text',
        content: 'Used to assign and update values efficiently:',
      },
      {
        type: 'code',
        content: `# Simple assignment (=)
x = 10
name = "Alice"

# Add and assign (+=)
x = 5
x += 3       # Same as: x = x + 3
print(x)     # 8

# Subtract and assign (-=)
x = 10
x -= 4       # Same as: x = x - 4
print(x)     # 6

# Multiply and assign (*=)
x = 5
x *= 2       # Same as: x = x * 2
print(x)     # 10

# Divide and assign (/=)
x = 20
x /= 4       # Same as: x = x / 4
print(x)     # 5.0

# Floor divide and assign (//=)
x = 17
x //= 5      # Same as: x = x // 5
print(x)     # 3

# Modulus and assign (%=)
x = 17
x %= 5       # Same as: x = x % 5
print(x)     # 2

# Exponent and assign (**=)
x = 2
x **= 3      # Same as: x = x ** 3
print(x)     # 8

# Bitwise AND assign (&=)
x = 5
x &= 3       # Same as: x = x & 3
print(x)     # 1

# Bitwise OR assign (|=)
x = 5
x |= 3       # Same as: x = x | 3
print(x)     # 7

# Bitwise XOR assign (^=)
x = 5
x ^= 3       # Same as: x = x ^ 3
print(x)     # 6

# Left shift assign (<<=)
x = 2
x <<= 2      # Same as: x = x << 2
print(x)     # 8

# Right shift assign (>>=)
x = 8
x >>= 2      # Same as: x = x >> 2
print(x)     # 2`,
      },
      {
        type: 'heading',
        content: 'Practical Assignment Examples',
      },
      {
        type: 'code',
        content: `# Counter increment
count = 0
count += 1  # Increment by 1
count += 1
print(count)  # 2

# Accumulate sum
total = 0
total += 10
total += 20
total += 30
print(f"Total: {total}")  # 60

# String concatenation
message = "Hello"
message += " "
message += "World"
print(message)  # Hello World

# List extension
numbers = [1, 2, 3]
numbers += [4, 5]
print(numbers)  # [1, 2, 3, 4, 5]

# Discount calculation
price = 100
price *= 0.9  # Apply 10% discount
print(f"Discounted price: $\{price\}")  # $90.0`,
      },
      {
        type: 'heading',
        content: '5. Identity Operators',
      },
      {
        type: 'text',
        content: 'Check if two variables point to the same object in memory:',
      },
      {
        type: 'code',
        content: `# is - checks if same object (identity)
# == - checks if same value (equality)

a = [1, 2, 3]
b = [1, 2, 3]
c = a

# is operator
print(a is b)   # False (different objects)
print(a is c)   # True (same object)

# is not operator
print(a is not b)  # True
print(a is not c)  # False

# == operator (for comparison)
print(a == b)   # True (same values)

# None check (always use 'is' with None)
value = None
print(value is None)      # True (correct way)
print(value == None)      # True (works but not recommended)

# Small integers are cached
x = 256
y = 256
print(x is y)   # True (Python caches -5 to 256)

x = 257
y = 257
print(x is y)   # False (different objects)

# String interning
s1 = "hello"
s2 = "hello"
print(s1 is s2)  # True (Python interns strings)

# Check object ID
print(id(a))
print(id(b))  # Different ID
print(id(c))  # Same as 'a'`,
      },
      {
        type: 'heading',
        content: '6. Membership Operators',
      },
      {
        type: 'text',
        content: 'Check if a value exists in a sequence (list, tuple, string, set, dict):',
      },
      {
        type: 'code',
        content: `# in operator - checks if value exists
fruits = ["apple", "banana", "cherry"]
print("apple" in fruits)      # True
print("mango" in fruits)      # False

# not in operator - checks if value doesn't exist
print("mango" not in fruits)  # True
print("apple" not in fruits)  # False

# String membership
text = "Hello World"
print("Hello" in text)        # True
print("hello" in text)        # False (case-sensitive)
print("xyz" not in text)      # True

# Tuple membership
coordinates = (10, 20, 30)
print(20 in coordinates)      # True
print(50 in coordinates)      # False

# Dictionary membership (checks keys, not values)
user = {"name": "Alice", "age": 25}
print("name" in user)         # True
print("Alice" in user)        # False (value, not key)
print("email" not in user)    # True

# Set membership
numbers = {1, 2, 3, 4, 5}
print(3 in numbers)           # True
print(10 in numbers)          # False

# Range membership
print(5 in range(1, 10))      # True
print(15 in range(1, 10))     # False`,
      },
      {
        type: 'heading',
        content: '7. Bitwise Operators',
      },
      {
        type: 'text',
        content: 'Work at the binary level. Used in low-level programming, permissions, and flags:',
      },
      {
        type: 'code',
        content: `# Bitwise AND (&)
a = 5   # Binary: 0101
b = 3   # Binary: 0011
print(a & b)   # 1 (Binary: 0001)

# Bitwise OR (|)
print(a | b)   # 7 (Binary: 0111)

# Bitwise XOR (^)
print(a ^ b)   # 6 (Binary: 0110)

# Bitwise NOT (~)
print(~a)      # -6 (inverts all bits)
print(~0)      # -1
print(~(-1))   # 0

# Left Shift (<<) - multiply by 2^n
print(5 << 1)  # 10 (5 * 2^1)
print(5 << 2)  # 20 (5 * 2^2)
print(1 << 3)  # 8 (1 * 2^3)

# Right Shift (>>) - divide by 2^n
print(10 >> 1)  # 5 (10 / 2^1)
print(20 >> 2)  # 5 (20 / 2^2)
print(8 >> 3)   # 1 (8 / 2^3)`,
      },
      {
        type: 'heading',
        content: 'Bitwise Operators - Practical Uses',
      },
      {
        type: 'code',
        content: `# Check if number is even or odd
num = 17
if num & 1:
    print("Odd")   # True (last bit is 1)
else:
    print("Even")

# Swap two numbers without temp variable
a = 5
b = 10
a = a ^ b
b = a ^ b
a = a ^ b
print(a, b)  # 10 5

# Multiply/divide by powers of 2 (fast)
num = 5
print(num << 1)  # 10 (multiply by 2)
print(num << 2)  # 20 (multiply by 4)
print(num >> 1)  # 2 (divide by 2)

# Permission flags (like file permissions)
READ = 1    # Binary: 001
WRITE = 2   # Binary: 010
EXECUTE = 4 # Binary: 100

# Grant permissions
permissions = READ | WRITE  # Binary: 011
print(f"Permissions: {permissions}")

# Check if has permission
if permissions & READ:
    print("Has read permission")
if permissions & EXECUTE:
    print("Has execute permission")
else:
    print("No execute permission")

# Toggle bits
flags = 5  # Binary: 0101
flags ^= 1 # Toggle last bit
print(flags)  # 4 (Binary: 0100)`,
      },
      {
        type: 'heading',
        content: 'Operator Precedence (Order of Operations)',
      },
      {
        type: 'text',
        content: 'When multiple operators appear in an expression, Python follows precedence rules (PEMDAS-like):',
      },
      {
        type: 'code',
        content: `# Parentheses have highest priority
result = (2 + 3) * 4
print(result)  # 20

# Without parentheses: * comes before +
result = 2 + 3 * 4
print(result)  # 14

# Exponentiation before multiplication
result = 2 * 3 ** 2
print(result)  # 18 (not 36)

# Complex expression
result = 10 + 5 * 2 ** 3 - 4 / 2
print(result)  # 10 + 5*8 - 2 = 48.0

# Comparison before logical
result = 5 > 3 and 10 < 20
print(result)  # True`,
      },
      {
        type: 'heading',
        content: 'Complete Operator Precedence Table',
      },
      {
        type: 'list',
        content: [
          '1. () - Parentheses (highest priority)',
          '2. ** - Exponentiation',
          '3. +x, -x, ~x - Unary plus, minus, bitwise NOT',
          '4. *, /, //, % - Multiply, divide, floor divide, modulus',
          '5. +, - - Addition, subtraction',
          '6. <<, >> - Bitwise shifts',
          '7. & - Bitwise AND',
          '8. ^ - Bitwise XOR',
          '9. | - Bitwise OR',
          '10. ==, !=, <, <=, >, >=, is, is not, in, not in - Comparisons',
          '11. not - Logical NOT',
          '12. and - Logical AND',
          '13. or - Logical OR (lowest priority)',
        ],
      },
      {
        type: 'code',
        content: `# Precedence examples
print(2 + 3 * 4)          # 14 (3*4 first)
print((2 + 3) * 4)        # 20 (parentheses first)
print(2 ** 3 ** 2)        # 512 (right to left: 3^2=9, 2^9=512)
print((2 ** 3) ** 2)      # 64 (left to right: 2^3=8, 8^2=64)
print(10 + 5 * 2)         # 20
print(True or False and False)  # True (and before or)
print((True or False) and False)  # False

# Best practice: use parentheses for clarity
unclear = 10 + 5 * 2 ** 3 - 4 / 2
clear = 10 + (5 * (2 ** 3)) - (4 / 2)  # Much clearer!
print(unclear == clear)  # True`,
      },
      {
        type: 'heading',
        content: 'Operator Associativity',
      },
      {
        type: 'text',
        content: 'Associativity determines the order when operators have the same precedence:',
      },
      {
        type: 'code',
        content: `# Left to right associativity (most operators)
result = 10 - 5 - 2
print(result)  # 3 (evaluated as (10-5)-2)

result = 20 / 4 / 2
print(result)  # 2.5 (evaluated as (20/4)/2)

# Right to left associativity (exponentiation)
result = 2 ** 3 ** 2
print(result)  # 512 (evaluated as 2**(3**2))

# Assignment is also right to left
x = y = z = 10
print(x, y, z)  # 10 10 10`,
      },
      {
        type: 'heading',
        content: 'Operator Overloading Preview',
      },
      {
        type: 'text',
        content: 'Operators can work differently with different data types (you\'ll learn to create custom behavior in OOP):',
      },
      {
        type: 'code',
        content: `# + operator overloading
print(5 + 3)           # 8 (addition for numbers)
print("Hello" + " " + "World")  # Hello World (concatenation)
print([1, 2] + [3, 4]) # [1, 2, 3, 4] (list concatenation)

# * operator overloading
print(5 * 3)           # 15 (multiplication)
print("Hi" * 3)        # HiHiHi (string repetition)
print([1, 2] * 2)      # [1, 2, 1, 2] (list repetition)

# in operator overloading
print(5 in [1, 2, 5])       # True (list membership)
print("e" in "Hello")        # True (string membership)
print("name" in {"name": "Alice"})  # True (dict key check)`,
      },
      {
        type: 'note',
        content: 'When in doubt about operator precedence, use parentheses to make your code clearer and avoid mistakes. Remember: Readability counts! (The Zen of Python)',
      },
    ],
  },

  'control-flow': {
    title: 'Control Flow',
    description: 'Master decision-making and iteration with comprehensive coverage of conditionals, loops, and control statements.',
    sections: [
      {
        type: 'heading',
        content: '1. Conditional Statements',
      },
      {
        type: 'subheading',
        content: 'If Statement',
      },
      {
        type: 'text',
        content: 'Execute code only when a condition is True:',
      },
      {
        type: 'code',
        content: `age = 18

if age >= 18:
    print("You are an adult")
    print("You can vote")

# Output: You are an adult
#         You can vote`,
      },
      {
        type: 'subheading',
        content: 'If-Else Statement',
      },
      {
        type: 'text',
        content: 'Execute different code based on whether a condition is True or False:',
      },
      {
        type: 'code',
        content: `temperature = 30

if temperature > 25:
    print("It's hot outside")
else:
    print("It's cool outside")

# Output: It's hot outside`,
      },
      {
        type: 'subheading',
        content: 'If-Elif-Else Statement',
      },
      {
        type: 'text',
        content: 'Check multiple conditions in sequence. Once a condition is True, its block executes and the rest are skipped:',
      },
      {
        type: 'code',
        content: `score = 75

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")

# Output: Grade: C`,
      },
      {
        type: 'subheading',
        content: 'Nested Conditionals',
      },
      {
        type: 'text',
        content: 'You can place if statements inside other if statements for complex decision making:',
      },
      {
        type: 'code',
        content: `age = 20
has_license = True

if age >= 18:
    if has_license:
        print("You can drive")
    else:
        print("You need a license")
else:
    print("You are too young to drive")

# Output: You can drive`,
      },
      {
        type: 'subheading',
        content: 'Ternary Operator (Conditional Expression)',
      },
      {
        type: 'text',
        content: 'A concise way to write simple if-else statements in one line:',
      },
      {
        type: 'code',
        content: `# Syntax: value_if_true if condition else value_if_false

age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # adult

# Traditional equivalent:
if age >= 18:
    status = "adult"
else:
    status = "minor"

# More examples
x = 10
y = 20
max_value = x if x > y else y
print(max_value)  # 20

number = 7
result = "even" if number % 2 == 0 else "odd"
print(result)  # odd`,
      },
      {
        type: 'subheading',
        content: 'Multiple Conditions with Logical Operators',
      },
      {
        type: 'text',
        content: 'Combine multiple conditions using and, or, and not:',
      },
      {
        type: 'code',
        content: `age = 25
income = 50000

# AND - both conditions must be True
if age >= 18 and income > 30000:
    print("Loan approved")

# OR - at least one condition must be True
day = "Saturday"
if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")

# NOT - inverts the condition
is_raining = False
if not is_raining:
    print("You don't need an umbrella")

# Complex combinations
temperature = 30
humidity = 70
if temperature > 25 and (humidity > 60 or humidity < 30):
    print("Weather alert!")`,
      },
      {
        type: 'heading',
        content: '2. For Loops',
      },
      {
        type: 'text',
        content: 'Repeat code a specific number of times or iterate over sequences:',
      },
      {
        type: 'subheading',
        content: 'Basic For Loop with range()',
      },
      {
        type: 'code',
        content: `# Loop through a range of numbers
for i in range(5):
    print(i)
# Output: 0, 1, 2, 3, 4

# Loop with start and end
for i in range(2, 6):
    print(i)
# Output: 2, 3, 4, 5

# Loop with step
for i in range(0, 10, 2):
    print(i)
# Output: 0, 2, 4, 6, 8

# Countdown
for i in range(5, 0, -1):
    print(i)
# Output: 5, 4, 3, 2, 1`,
      },
      {
        type: 'subheading',
        content: 'Iterating Over Collections',
      },
      {
        type: 'code',
        content: `# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Loop through a string
for char in "Python":
    print(char)
# Output: P, y, t, h, o, n

# Loop through a dictionary
person = {"name": "Alice", "age": 30, "city": "NYC"}
for key in person:
    print(f"$\{key\}: $\{person[key]\}")

# Loop through dictionary items
for key, value in person.items():
    print(f"$\{key\}: $\{value\}")`,
      },
      {
        type: 'subheading',
        content: 'enumerate() Function',
      },
      {
        type: 'text',
        content: 'Get both the index and value while looping:',
      },
      {
        type: 'code',
        content: `fruits = ["apple", "banana", "cherry"]

for index, fruit in enumerate(fruits):
    print(f"$\{index\}: $\{fruit\}")
# Output: 0: apple
#         1: banana
#         2: cherry

# Start index at 1
for index, fruit in enumerate(fruits, start=1):
    print(f"$\{index\}. $\{fruit\}")
# Output: 1. apple
#         2. banana
#         3. cherry`,
      },
      {
        type: 'subheading',
        content: 'zip() Function',
      },
      {
        type: 'text',
        content: 'Iterate over multiple sequences simultaneously:',
      },
      {
        type: 'code',
        content: `names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
cities = ["NYC", "LA", "Chicago"]

for name, age, city in zip(names, ages, cities):
    print(f"$\{name\} is $\{age\} years old and lives in $\{city\}")

# Output:
# Alice is 25 years old and lives in NYC
# Bob is 30 years old and lives in LA
# Charlie is 35 years old and lives in Chicago`,
      },
      {
        type: 'subheading',
        content: 'Nested Loops',
      },
      {
        type: 'text',
        content: 'Loops inside loops for working with multi-dimensional data:',
      },
      {
        type: 'code',
        content: `# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"$\{i\} x $\{j\} = $\{i*j\}")
    print()  # blank line

# Pattern printing
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()
# Output:
# *
# **
# ***
# ****
# *****

# Working with 2D lists
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matrix:
    for value in row:
        print(value, end=" ")
    print()`,
      },
      {
        type: 'heading',
        content: '3. While Loops',
      },
      {
        type: 'text',
        content: 'Repeat code as long as a condition is True. Be careful to avoid infinite loops:',
      },
      {
        type: 'code',
        content: `count = 0

while count < 5:
    print("Count:", count)
    count += 1

# Output: Count: 0
#         Count: 1
#         Count: 2
#         Count: 3
#         Count: 4`,
      },
      {
        type: 'subheading',
        content: 'User Input Validation',
      },
      {
        type: 'code',
        content: `# Keep asking until valid input
age = -1
while age < 0 or age > 120:
    age = int(input("Enter your age (0-120): "))
    if age < 0 or age > 120:
        print("Invalid age. Try again.")

# Password validation
password = ""
while len(password) < 8:
    password = input("Enter a password (min 8 characters): ")
    if len(password) < 8:
        print("Too short!")`,
      },
      {
        type: 'subheading',
        content: 'While with Counter',
      },
      {
        type: 'code',
        content: `# Calculate sum of numbers from 1 to 10
total = 0
num = 1

while num <= 10:
    total += num
    num += 1

print(f"Sum: $\{total\}")  # 55

# Find first power of 2 greater than 1000
power = 1
exponent = 0

while power <= 1000:
    power *= 2
    exponent += 1

print(f"2^$\{exponent\} = $\{power\}")  # 2^10 = 1024`,
      },
      {
        type: 'heading',
        content: '4. Loop Control Statements',
      },
      {
        type: 'subheading',
        content: 'Break Statement',
      },
      {
        type: 'text',
        content: 'Exit a loop immediately when a condition is met:',
      },
      {
        type: 'code',
        content: `# Search for a value
numbers = [1, 3, 5, 7, 9, 11]
target = 7

for num in numbers:
    if num == target:
        print(f"Found $\{target\}!")
        break
else:
    print(f"$\{target\} not found")

# Exit on user input
while True:
    command = input("Enter command (or 'quit'): ")
    if command == "quit":
        break
    print(f"Processing: $\{command\}")`,
      },
      {
        type: 'subheading',
        content: 'Continue Statement',
      },
      {
        type: 'text',
        content: 'Skip the current iteration and continue with the next one:',
      },
      {
        type: 'code',
        content: `# Skip even numbers
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)
# Output: 1, 3, 5, 7, 9

# Skip negative numbers
numbers = [10, -5, 20, -3, 15, -8]
for num in numbers:
    if num < 0:
        continue
    print(num)
# Output: 10, 20, 15`,
      },
      {
        type: 'subheading',
        content: 'Pass Statement',
      },
      {
        type: 'text',
        content: 'A placeholder that does nothing. Useful for creating empty code blocks:',
      },
      {
        type: 'code',
        content: `for i in range(5):
    if i == 2:
        pass  # TODO: Add logic later
    print(i)

# Output: 0, 1, 2, 3, 4
# pass does nothing, just a placeholder

# Empty function or class definition
def future_function():
    pass  # Will implement later

class FutureClass:
    pass  # Will add methods later`,
      },
      {
        type: 'heading',
        content: '5. Loop Else Clause',
      },
      {
        type: 'text',
        content: 'The else block executes only if the loop completes normally (without break):',
      },
      {
        type: 'code',
        content: `# Search with for-else
numbers = [1, 3, 5, 7, 9]
target = 6

for num in numbers:
    if num == target:
        print(f"Found $\{target\}!")
        break
else:
    print(f"$\{target\} not found in list")
# Output: 6 not found in list

# Check if a number is prime
number = 17
is_prime = True

for i in range(2, number):
    if number % i == 0:
        is_prime = False
        break
else:
    is_prime = True

print(f"$\{number\} is prime: $\{is_prime\}")

# While-else
count = 0
while count < 5:
    print(count)
    count += 1
else:
    print("Loop completed normally")`,
      },
      {
        type: 'heading',
        content: '6. Match-Case Statement (Python 3.10+)',
      },
      {
        type: 'text',
        content: 'Structural pattern matching for cleaner conditional logic:',
      },
      {
        type: 'code',
        content: `# Basic match-case
status_code = 404

match status_code:
    case 200:
        print("OK")
    case 404:
        print("Not Found")
    case 500:
        print("Server Error")
    case _:
        print("Unknown status")
# Output: Not Found

# Pattern matching with values
command = "go north"

match command.split():
    case ["go", direction]:
        print(f"Going $\{direction\}")
    case ["take", item]:
        print(f"Taking $\{item\}")
    case ["quit"]:
        print("Goodbye!")
    case _:
        print("Unknown command")

# Matching with conditions
point = (0, 5)

match point:
    case (0, 0):
        print("Origin")
    case (0, y):
        print(f"On Y-axis at $\{y\}")
    case (x, 0):
        print(f"On X-axis at $\{x\}")
    case (x, y):
        print(f"Point at ($\{x\}, $\{y\})")`,
      },
      {
        type: 'heading',
        content: '7. Practical Examples',
      },
      {
        type: 'subheading',
        content: 'Input Validation',
      },
      {
        type: 'code',
        content: `# Email validation
email = input("Enter email: ")

if "@" in email and "." in email:
    if email.count("@") == 1:
        print("Email looks valid")
    else:
        print("Too many @ symbols")
else:
    print("Invalid email format")`,
      },
      {
        type: 'subheading',
        content: 'Menu System',
      },
      {
        type: 'code',
        content: `while True:
    print("\\n=== Menu ===")
    print("1. Option A")
    print("2. Option B")
    print("3. Exit")
    
    choice = input("Select option: ")
    
    if choice == "1":
        print("You selected Option A")
    elif choice == "2":
        print("You selected Option B")
    elif choice == "3":
        print("Goodbye!")
        break
    else:
        print("Invalid choice")`,
      },
      {
        type: 'subheading',
        content: 'Finding Maximum and Minimum',
      },
      {
        type: 'code',
        content: `numbers = [45, 23, 78, 12, 90, 56]

# Find maximum
max_num = numbers[0]
for num in numbers:
    if num > max_num:
        max_num = num
print(f"Maximum: $\{max_num\}")

# Find minimum
min_num = numbers[0]
for num in numbers:
    if num < min_num:
        min_num = num
print(f"Minimum: $\{min_num\}")`,
      },
      {
        type: 'subheading',
        content: 'Sum and Average',
      },
      {
        type: 'code',
        content: `numbers = [10, 20, 30, 40, 50]

# Calculate sum
total = 0
for num in numbers:
    total += num

# Calculate average
average = total / len(numbers)

print(f"Sum: $\{total\}")        # 150
print(f"Average: $\{average\}")  # 30.0`,
      },
      {
        type: 'subheading',
        content: 'Fibonacci Sequence',
      },
      {
        type: 'code',
        content: `# Generate first 10 Fibonacci numbers
n = 10
a, b = 0, 1
count = 0

while count < n:
    print(a, end=" ")
    a, b = b, a + b
    count += 1
# Output: 0 1 1 2 3 5 8 13 21 34`,
      },
      {
        type: 'subheading',
        content: 'Factorial Calculation',
      },
      {
        type: 'code',
        content: `# Calculate factorial using loop
number = 5
factorial = 1

for i in range(1, number + 1):
    factorial *= i

print(f"$\{number\}! = $\{factorial\}")  # 5! = 120`,
      },
      {
        type: 'subheading',
        content: 'Reverse a String',
      },
      {
        type: 'code',
        content: `text = "Python"
reversed_text = ""

for char in text:
    reversed_text = char + reversed_text

print(reversed_text)  # nohtyP

# Alternative using range
text = "Python"
reversed_text = ""

for i in range(len(text) - 1, -1, -1):
    reversed_text += text[i]

print(reversed_text)  # nohtyP`,
      },
      {
        type: 'subheading',
        content: 'Count Vowels',
      },
      {
        type: 'code',
        content: `text = "Hello World"
vowels = "aeiouAEIOU"
count = 0

for char in text:
    if char in vowels:
        count += 1

print(f"Number of vowels: $\{count\}")  # 3`,
      },
      {
        type: 'subheading',
        content: 'Prime Number Checker',
      },
      {
        type: 'code',
        content: `number = 29

if number < 2:
    print(f"$\{number\} is not prime")
else:
    is_prime = True
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            is_prime = False
            break
    
    if is_prime:
        print(f"$\{number\} is prime")
    else:
        print(f"$\{number\} is not prime")`,
      },
      {
        type: 'note',
        content: 'Indentation is crucial in Python! Code blocks are defined by indentation (usually 4 spaces). Unlike other languages, Python doesn\'t use braces {} for blocks.',
      },
      {
        type: 'note',
        content: 'Best Practices: Use for loops when you know the number of iterations, while loops for unknown iterations. Always ensure while loops have a way to exit to avoid infinite loops. Use break and continue sparingly for clearer code.',
      },
    ],
  },

  'data-structures': {
    title: 'Data Structures',
    description: 'Master Python\'s built-in data structures with comprehensive coverage of all methods, operations, and practical applications.',
    sections: [
      {
        type: 'heading',
        content: '1. Strings',
      },
      {
        type: 'text',
        content: 'Strings are immutable sequences of characters. Once created, they cannot be modified in place.',
      },
      {
        type: 'subheading',
        content: 'Creating Strings',
      },
      {
        type: 'code',
        content: `# Different ways to create strings
single = 'Hello'
double = "World"
triple = '''Multiple
lines'''
triple_double = """Also
multiple lines"""

# Empty string
empty = ""

# String concatenation
full_name = "John" + " " + "Doe"
print(full_name)  # John Doe

# String repetition
line = "-" * 20
print(line)  # --------------------`,
      },
      {
        type: 'subheading',
        content: 'String Indexing and Slicing',
      },
      {
        type: 'code',
        content: `text = "Python Programming"

# Indexing (accessing individual characters)
print(text[0])      # P (first character)
print(text[1])      # y
print(text[-1])     # g (last character)
print(text[-2])     # n (second to last)

# Slicing [start:end:step]
print(text[0:6])    # Python (characters 0 to 5)
print(text[:6])     # Python (from start to 5)
print(text[7:])     # Programming (from 7 to end)
print(text[-11:])   # Programming (last 11 chars)
print(text[::2])    # Pto rgamn (every 2nd char)
print(text[::-1])   # gnimmargorP nohtyP (reversed)`,
      },
      {
        type: 'subheading',
        content: 'String Methods - Case Conversion',
      },
      {
        type: 'code',
        content: `text = "hello world"

# upper() - Convert to uppercase
print(text.upper())  # HELLO WORLD

# lower() - Convert to lowercase
print("PYTHON".lower())  # python

# capitalize() - First character uppercase, rest lowercase
print(text.capitalize())  # Hello world

# title() - First character of each word uppercase
print(text.title())  # Hello World

# swapcase() - Swap uppercase and lowercase
print("Hello World".swapcase())  # hELLO wORLD

# casefold() - Aggressive lowercase (for comparisons)
print("ß".casefold())  # ss`,
      },
      {
        type: 'subheading',
        content: 'String Methods - Searching and Checking',
      },
      {
        type: 'code',
        content: `text = "Python Programming"

# find() - Return index of first occurrence (-1 if not found)
print(text.find("Pro"))      # 7
print(text.find("Java"))     # -1

# rfind() - Return index of last occurrence
print("hello hello".rfind("hello"))  # 6

# index() - Like find() but raises error if not found
print(text.index("Pro"))     # 7

# count() - Count occurrences
print("hello world".count("l"))  # 3

# startswith() - Check if starts with substring
print(text.startswith("Py"))     # True
print(text.startswith("Java"))   # False

# endswith() - Check if ends with substring
print(text.endswith("ing"))      # True

# in operator - Check if substring exists
print("Pro" in text)             # True
print("Java" in text)            # False`,
      },
      {
        type: 'subheading',
        content: 'String Methods - Validation',
      },
      {
        type: 'code',
        content: `# isalpha() - Check if all characters are alphabetic
print("Hello".isalpha())      # True
print("Hello123".isalpha())   # False

# isdigit() - Check if all characters are digits
print("12345".isdigit())      # True
print("123.45".isdigit())     # False

# isalnum() - Check if alphanumeric (letters and numbers)
print("Hello123".isalnum())   # True
print("Hello 123".isalnum())  # False (space)

# isspace() - Check if all whitespace
print("   ".isspace())        # True
print("  a ".isspace())       # False

# isupper() - Check if all uppercase
print("HELLO".isupper())      # True
print("Hello".isupper())      # False

# islower() - Check if all lowercase
print("hello".islower())      # True

# istitle() - Check if titlecased
print("Hello World".istitle())  # True
print("hello World".istitle())  # False`,
      },
      {
        type: 'subheading',
        content: 'String Methods - Modification (Return New Strings)',
      },
      {
        type: 'code',
        content: `text = "  Hello World  "

# strip() - Remove leading/trailing whitespace
print(text.strip())        # "Hello World"

# lstrip() - Remove leading whitespace
print(text.lstrip())       # "Hello World  "

# rstrip() - Remove trailing whitespace
print(text.rstrip())       # "  Hello World"

# replace() - Replace substring
text2 = "Hello World"
print(text2.replace("World", "Python"))  # Hello Python
print(text2.replace("l", "L"))           # HeLLo WorLd

# replace with count limit
print("aaa bbb ccc".replace("a", "x", 2))  # xxa bbb ccc`,
      },
      {
        type: 'subheading',
        content: 'String Methods - Splitting and Joining',
      },
      {
        type: 'code',
        content: `# split() - Split string into list
text = "apple,banana,cherry"
fruits = text.split(",")
print(fruits)  # ['apple', 'banana', 'cherry']

sentence = "Hello World Python"
words = sentence.split()  # Default splits by whitespace
print(words)  # ['Hello', 'World', 'Python']

# rsplit() - Split from right
print("a b c d".rsplit(" ", 2))  # ['a b', 'c', 'd']

# splitlines() - Split by line breaks
multi = "Line 1\\nLine 2\\nLine 3"
lines = multi.splitlines()
print(lines)  # ['Line 1', 'Line 2', 'Line 3']

# join() - Join list into string
fruits = ["apple", "banana", "cherry"]
result = ", ".join(fruits)
print(result)  # apple, banana, cherry

words = ["Hello", "World"]
sentence = " ".join(words)
print(sentence)  # Hello World`,
      },
      {
        type: 'subheading',
        content: 'String Methods - Alignment and Padding',
      },
      {
        type: 'code',
        content: `text = "Python"

# center() - Center align
print(text.center(20))       # "       Python       "
print(text.center(20, "*"))  # "*******Python*******"

# ljust() - Left justify
print(text.ljust(20))        # "Python              "
print(text.ljust(20, "-"))   # "Python--------------"

# rjust() - Right justify
print(text.rjust(20))        # "              Python"
print(text.rjust(20, "."))   # "..............Python"

# zfill() - Pad with zeros
print("42".zfill(5))         # 00042
print("-42".zfill(5))        # -0042`,
      },
      {
        type: 'subheading',
        content: 'String Formatting',
      },
      {
        type: 'code',
        content: `name = "Alice"
age = 25
price = 19.99

# f-strings (Python 3.6+) - Recommended
print(f"My name is $\{name\} and I am $\{age\} years old")

# Formatting numbers
print(f"Price: $$\{price:.2f\}")  # Price: $19.99
print(f"Number: $\{42:05d\}")      # Number: 00042

# format() method
print("My name is $\{\} and I am $\{\}".format(name, age))
print("$\{0\} is $\{1\} years old. $\{0\} is a developer.".format(name, age))
print("$\{name\} is $\{age\} years old".format(name=name, age=age))

# % formatting (old style)
print("My name is %s and I am %d years old" % (name, age))`,
      },
      {
        type: 'heading',
        content: '2. Lists',
      },
      {
        type: 'text',
        content: 'Lists are ordered, mutable collections that can hold elements of different types. They are one of the most versatile data structures in Python.',
      },
      {
        type: 'subheading',
        content: 'Creating Lists',
      },
      {
        type: 'code',
        content: `# Empty list
empty = []
empty2 = list()

# List with elements
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True, None]

# Nested lists
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# List from string
chars = list("Python")
print(chars)  # ['P', 'y', 't', 'h', 'o', 'n']

# List from range
nums = list(range(5))
print(nums)  # [0, 1, 2, 3, 4]`,
      },
      {
        type: 'subheading',
        content: 'Accessing and Modifying Lists',
      },
      {
        type: 'code',
        content: `fruits = ["apple", "banana", "cherry", "date"]

# Indexing
print(fruits[0])      # apple
print(fruits[-1])     # date

# Slicing
print(fruits[1:3])    # ['banana', 'cherry']
print(fruits[:2])     # ['apple', 'banana']
print(fruits[2:])     # ['cherry', 'date']
print(fruits[::2])    # ['apple', 'cherry']
print(fruits[::-1])   # ['date', 'cherry', 'banana', 'apple']

# Modifying elements
fruits[1] = "blueberry"
print(fruits)  # ['apple', 'blueberry', 'cherry', 'date']

# Modifying slices
fruits[1:3] = ["kiwi", "mango"]
print(fruits)  # ['apple', 'kiwi', 'mango', 'date']`,
      },
      {
        type: 'subheading',
        content: 'List Methods - Adding Elements',
      },
      {
        type: 'code',
        content: `fruits = ["apple", "banana"]

# append() - Add element to end
fruits.append("cherry")
print(fruits)  # ['apple', 'banana', 'cherry']

# insert() - Insert element at specific index
fruits.insert(1, "blueberry")
print(fruits)  # ['apple', 'blueberry', 'banana', 'cherry']

# extend() - Add multiple elements from iterable
fruits.extend(["date", "elderberry"])
print(fruits)  # ['apple', 'blueberry', 'banana', 'cherry', 'date', 'elderberry']

# Using + operator
more_fruits = fruits + ["fig", "grape"]
print(more_fruits)

# Using * operator for repetition
repeated = ["x"] * 3
print(repeated)  # ['x', 'x', 'x']`,
      },
      {
        type: 'subheading',
        content: 'List Methods - Removing Elements',
      },
      {
        type: 'code',
        content: `fruits = ["apple", "banana", "cherry", "banana"]

# remove() - Remove first occurrence of value
fruits.remove("banana")
print(fruits)  # ['apple', 'cherry', 'banana']

# pop() - Remove and return element at index (default: last)
last = fruits.pop()
print(last)    # banana
print(fruits)  # ['apple', 'cherry']

first = fruits.pop(0)
print(first)   # apple
print(fruits)  # ['cherry']

# clear() - Remove all elements
fruits = ["apple", "banana"]
fruits.clear()
print(fruits)  # []

# del statement
fruits = ["apple", "banana", "cherry"]
del fruits[1]
print(fruits)  # ['apple', 'cherry']

# Delete slice
nums = [1, 2, 3, 4, 5]
del nums[1:3]
print(nums)  # [1, 4, 5]`,
      },
      {
        type: 'subheading',
        content: 'List Methods - Searching and Counting',
      },
      {
        type: 'code',
        content: `fruits = ["apple", "banana", "cherry", "banana"]

# index() - Return index of first occurrence
print(fruits.index("banana"))  # 1

# index with start and end
print(fruits.index("banana", 2))  # 3

# count() - Count occurrences
print(fruits.count("banana"))  # 2
print(fruits.count("grape"))   # 0

# in operator - Check if element exists
print("apple" in fruits)    # True
print("grape" in fruits)    # False

# not in operator
print("grape" not in fruits)  # True`,
      },
      {
        type: 'subheading',
        content: 'List Methods - Sorting and Reversing',
      },
      {
        type: 'code',
        content: `numbers = [3, 1, 4, 1, 5, 9, 2]

# sort() - Sort in place (modifies original)
numbers.sort()
print(numbers)  # [1, 1, 2, 3, 4, 5, 9]

# sort in descending order
numbers.sort(reverse=True)
print(numbers)  # [9, 5, 4, 3, 2, 1, 1]

# sorted() - Return new sorted list (doesn't modify original)
original = [3, 1, 4, 1, 5]
sorted_list = sorted(original)
print(original)     # [3, 1, 4, 1, 5]
print(sorted_list)  # [1, 1, 3, 4, 5]

# Sort strings
fruits = ["banana", "apple", "cherry"]
fruits.sort()
print(fruits)  # ['apple', 'banana', 'cherry']

# reverse() - Reverse in place
fruits.reverse()
print(fruits)  # ['cherry', 'banana', 'apple']

# reversed() - Return reversed iterator
nums = [1, 2, 3]
reversed_nums = list(reversed(nums))
print(reversed_nums)  # [3, 2, 1]

# Sort with key function
words = ["python", "is", "awesome"]
words.sort(key=len)
print(words)  # ['is', 'python', 'awesome']`,
      },
      {
        type: 'subheading',
        content: 'List Methods - Copying',
      },
      {
        type: 'code',
        content: `original = [1, 2, 3]

# copy() - Create shallow copy
copied = original.copy()
copied[0] = 999
print(original)  # [1, 2, 3]
print(copied)    # [999, 2, 3]

# list() constructor - Also creates copy
copied2 = list(original)

# Slicing - Also creates copy
copied3 = original[:]

# For nested lists, use deepcopy
import copy
nested = [[1, 2], [3, 4]]
shallow = nested.copy()
deep = copy.deepcopy(nested)

shallow[0][0] = 999
print(nested)   # [[999, 2], [3, 4]] - affected!
print(shallow)  # [[999, 2], [3, 4]]
print(deep)     # [[1, 2], [3, 4]] - not affected`,
      },
      {
        type: 'subheading',
        content: 'List Comprehensions',
      },
      {
        type: 'code',
        content: `# Basic list comprehension
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# With condition
even_nums = [x for x in range(10) if x % 2 == 0]
print(even_nums)  # [0, 2, 4, 6, 8]

# With if-else
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
print(labels)  # ['even', 'odd', 'even', 'odd', 'even']

# Nested comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]
print(matrix)  # [[0, 0, 0], [0, 1, 2], [0, 2, 4]]

# Flatten nested list
nested = [[1, 2], [3, 4], [5, 6]]
flattened = [num for row in nested for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6]

# String operations
words = ["hello", "world", "python"]
upper_words = [word.upper() for word in words]
print(upper_words)  # ['HELLO', 'WORLD', 'PYTHON']`,
      },
      {
        type: 'subheading',
        content: 'List Unpacking and Other Operations',
      },
      {
        type: 'code',
        content: `# Unpacking
fruits = ["apple", "banana", "cherry"]
a, b, c = fruits
print(a)  # apple

# Unpacking with *
first, *middle, last = [1, 2, 3, 4, 5]
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5

# len() - Get length
print(len(fruits))  # 3

# min() and max()
numbers = [3, 1, 4, 1, 5]
print(min(numbers))  # 1
print(max(numbers))  # 5

# sum() - Sum of numeric list
print(sum(numbers))  # 14

# any() - True if any element is True
print(any([False, True, False]))  # True

# all() - True if all elements are True
print(all([True, True, True]))    # True
print(all([True, False, True]))   # False

# enumerate() - Get index and value
for i, fruit in enumerate(fruits):
    print(f"$\{i\}: $\{fruit\}")

# zip() - Combine multiple lists
names = ["Alice", "Bob"]
ages = [25, 30]
for name, age in zip(names, ages):
    print(f"$\{name\} is $\{age\}")`,
      },
      {
        type: 'heading',
        content: '3. Tuples',
      },
      {
        type: 'text',
        content: 'Tuples are ordered, immutable collections. Once created, they cannot be modified. They are memory-efficient and faster than lists.',
      },
      {
        type: 'subheading',
        content: 'Creating Tuples',
      },
      {
        type: 'code',
        content: `# Empty tuple
empty = ()
empty2 = tuple()

# Tuple with elements
coordinates = (10, 20)
person = ("Alice", 25, "Engineer")
mixed = (1, "hello", 3.14, True)

# Single element tuple (comma required!)
single = (42,)  # This is a tuple
not_tuple = (42)  # This is just an integer

# Tuple without parentheses (tuple packing)
point = 10, 20, 30
print(point)  # (10, 20, 30)

# Tuple from iterable
numbers = tuple([1, 2, 3, 4, 5])
chars = tuple("Python")
print(chars)  # ('P', 'y', 't', 'h', 'o', 'n')`,
      },
      {
        type: 'subheading',
        content: 'Accessing Tuple Elements',
      },
      {
        type: 'code',
        content: `coordinates = (10, 20, 30, 40, 50)

# Indexing
print(coordinates[0])      # 10
print(coordinates[-1])     # 50

# Slicing
print(coordinates[1:3])    # (20, 30)
print(coordinates[:2])     # (10, 20)
print(coordinates[2:])     # (30, 40, 50)
print(coordinates[::2])    # (10, 30, 50)
print(coordinates[::-1])   # (50, 40, 30, 20, 10)

# Nested tuples
nested = ((1, 2), (3, 4), (5, 6))
print(nested[0])      # (1, 2)
print(nested[0][1])   # 2`,
      },
      {
        type: 'subheading',
        content: 'Tuple Methods and Operations',
      },
      {
        type: 'code',
        content: `numbers = (1, 2, 3, 2, 4, 2, 5)

# count() - Count occurrences
print(numbers.count(2))  # 3
print(numbers.count(9))  # 0

# index() - Find first occurrence
print(numbers.index(3))  # 2
print(numbers.index(2))  # 1 (first occurrence)

# index with start and end
print(numbers.index(2, 2))  # 3 (search from index 2)

# len() - Get length
print(len(numbers))  # 7

# min() and max()
print(min(numbers))  # 1
print(max(numbers))  # 5

# sum() - Sum of elements
print(sum(numbers))  # 19

# in operator - Check membership
print(3 in numbers)  # True
print(9 in numbers)  # False

# Concatenation
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
combined = tuple1 + tuple2
print(combined)  # (1, 2, 3, 4, 5, 6)

# Repetition
repeated = (1, 2) * 3
print(repeated)  # (1, 2, 1, 2, 1, 2)`,
      },
      {
        type: 'subheading',
        content: 'Tuple Unpacking',
      },
      {
        type: 'code',
        content: `# Basic unpacking
coordinates = (10, 20)
x, y = coordinates
print(x, y)  # 10 20

# Multiple values
person = ("Alice", 25, "Engineer")
name, age, job = person
print(name)  # Alice

# Unpacking with * (extended unpacking)
numbers = (1, 2, 3, 4, 5)
first, *middle, last = numbers
print(first)   # 1
print(middle)  # [2, 3, 4] (becomes list!)
print(last)    # 5

# Swapping variables using tuples
a = 10
b = 20
a, b = b, a
print(a, b)  # 20 10

# Function returning multiple values
def get_stats():
    return (10, 20, 30)  # Returns tuple

min_val, avg_val, max_val = get_stats()`,
      },
      {
        type: 'subheading',
        content: 'Named Tuples',
      },
      {
        type: 'code',
        content: `from collections import namedtuple

# Define a named tuple
Point = namedtuple('Point', ['x', 'y'])
person_tuple = namedtuple('Person', ['name', 'age', 'city'])

# Create instances
p = Point(10, 20)
print(p.x, p.y)  # 10 20

person = person_tuple("Alice", 25, "NYC")
print(person.name)  # Alice
print(person.age)   # 25

# Still works like regular tuple
print(person[0])    # Alice
print(len(person))  # 3`,
      },
      {
        type: 'subheading',
        content: 'When to Use Tuples',
      },
      {
        type: 'code',
        content: `# Use tuples for:

# 1. Fixed collections (coordinates, RGB colors)
rgb = (255, 128, 0)

# 2. Function returns multiple values
def divide(a, b):
    quotient = a // b
    remainder = a % b
    return quotient, remainder  # Returns tuple

# 3. Dictionary keys (tuples are hashable, lists are not)
locations = $\{\}
locations[(40.7128, -74.0060)] = "New York"
locations[(34.0522, -118.2437)] = "Los Angeles"

# 4. Immutable data for safety
config = ("localhost", 8080, "admin")

# 5. Faster and more memory efficient than lists
large_tuple = tuple(range(1000000))`,
      },
      {
        type: 'heading',
        content: '4. Sets',
      },
      {
        type: 'text',
        content: 'Sets are unordered collections of unique elements. They automatically remove duplicates and support mathematical set operations.',
      },
      {
        type: 'subheading',
        content: 'Creating Sets',
      },
      {
        type: 'code',
        content: `# Empty set (must use set(), not $\{\})
empty = set()

# Set with elements
fruits = $\{"apple", "banana", "cherry"\}
numbers = $\{1, 2, 3, 4, 5\}
mixed = $\{1, "hello", 3.14, True\}

# Duplicates are automatically removed
nums = $\{1, 2, 2, 3, 3, 3, 4\}
print(nums)  # $\{1, 2, 3, 4\}

# Set from iterable
chars = set("hello")
print(chars)  # $\{'h', 'e', 'l', 'o'\} (no duplicate 'l')

list_to_set = set([1, 2, 2, 3, 3, 3])
print(list_to_set)  # $\{1, 2, 3\}

# Frozen set (immutable set)
frozen = frozenset([1, 2, 3])`,
      },
      {
        type: 'subheading',
        content: 'Set Methods - Adding Elements',
      },
      {
        type: 'code',
        content: `fruits = $\{"apple", "banana"\}

# add() - Add single element
fruits.add("cherry")
print(fruits)  # $\{'apple', 'banana', 'cherry'\}

# Adding duplicate (no effect)
fruits.add("apple")
print(fruits)  # Still $\{'apple', 'banana', 'cherry'\}

# update() - Add multiple elements from iterable
fruits.update(["date", "elderberry"])
print(fruits)  # $\{'apple', 'banana', 'cherry', 'date', 'elderberry'\}

# update with multiple iterables
fruits.update(["fig"], $\{"grape"\})
print(fruits)`,
      },
      {
        type: 'subheading',
        content: 'Set Methods - Removing Elements',
      },
      {
        type: 'code',
        content: `fruits = $\{"apple", "banana", "cherry", "date"\}

# remove() - Remove element (raises error if not found)
fruits.remove("banana")
print(fruits)  # $\{'apple', 'cherry', 'date'\}

# discard() - Remove element (no error if not found)
fruits.discard("cherry")
print(fruits)  # $\{'apple', 'date'\}

fruits.discard("grape")  # No error even though 'grape' not in set

# pop() - Remove and return arbitrary element
removed = fruits.pop()
print(removed)
print(fruits)

# clear() - Remove all elements
fruits = $\{"apple", "banana"\}
fruits.clear()
print(fruits)  # set()`,
      },
      {
        type: 'subheading',
        content: 'Set Operations - Union',
      },
      {
        type: 'code',
        content: `set1 = $\{1, 2, 3\}
set2 = $\{3, 4, 5\}

# union() method - All elements from both sets
result = set1.union(set2)
print(result)  # $\{1, 2, 3, 4, 5\}

# | operator
result = set1 | set2
print(result)  # $\{1, 2, 3, 4, 5\}

# Union of multiple sets
set3 = $\{5, 6, 7\}
result = set1.union(set2, set3)
print(result)  # $\{1, 2, 3, 4, 5, 6, 7\}

# | with multiple sets
result = set1 | set2 | set3
print(result)  # $\{1, 2, 3, 4, 5, 6, 7\}`,
      },
      {
        type: 'subheading',
        content: 'Set Operations - Intersection',
      },
      {
        type: 'code',
        content: `set1 = $\{1, 2, 3, 4\}
set2 = $\{3, 4, 5, 6\}

# intersection() method - Common elements
result = set1.intersection(set2)
print(result)  # $\{3, 4\}

# & operator
result = set1 & set2
print(result)  # $\{3, 4\}

# Intersection of multiple sets
set3 = $\{2, 3, 4, 7\}
result = set1.intersection(set2, set3)
print(result)  # $\{3, 4\}

# & with multiple sets
result = set1 & set2 & set3
print(result)  # $\{3, 4\}`,
      },
      {
        type: 'subheading',
        content: 'Set Operations - Difference',
      },
      {
        type: 'code',
        content: `set1 = $\{1, 2, 3, 4\}
set2 = $\{3, 4, 5, 6\}

# difference() method - Elements in set1 but not in set2
result = set1.difference(set2)
print(result)  # $\{1, 2\}

# - operator
result = set1 - set2
print(result)  # $\{1, 2\}

# Reverse difference
result = set2 - set1
print(result)  # $\{5, 6\}

# symmetric_difference() - Elements in either but not both
result = set1.symmetric_difference(set2)
print(result)  # $\{1, 2, 5, 6\}

# ^ operator
result = set1 ^ set2
print(result)  # $\{1, 2, 5, 6\}`,
      },
      {
        type: 'subheading',
        content: 'Set Methods - Subset and Superset',
      },
      {
        type: 'code',
        content: `set1 = $\{1, 2, 3\}
set2 = $\{1, 2, 3, 4, 5\}

# issubset() - Check if set1 is subset of set2
print(set1.issubset(set2))  # True

# <= operator
print(set1 <= set2)  # True

# issuperset() - Check if set2 is superset of set1
print(set2.issuperset(set1))  # True

# >= operator
print(set2 >= set1)  # True

# isdisjoint() - Check if no common elements
set3 = $\{7, 8, 9\}
print(set1.isdisjoint(set3))  # True
print(set1.isdisjoint(set2))  # False`,
      },
      {
        type: 'subheading',
        content: 'Set Methods - Update Operations',
      },
      {
        type: 'code',
        content: `set1 = $\{1, 2, 3\}
set2 = $\{3, 4, 5\}

# update() or |= - Add elements from another set
set1.update(set2)  # or set1 |= set2
print(set1)  # $\{1, 2, 3, 4, 5\}

# intersection_update() or &= - Keep only common elements
set1 = $\{1, 2, 3, 4\}
set1.intersection_update(set2)  # or set1 &= set2
print(set1)  # $\{3, 4\}

# difference_update() or -= - Remove elements found in other
set1 = $\{1, 2, 3, 4\}
set1.difference_update(set2)  # or set1 -= set2
print(set1)  # $\{1, 2\}

# symmetric_difference_update() or ^= - Keep elements in either but not both
set1 = $\{1, 2, 3, 4\}
set1.symmetric_difference_update(set2)  # or set1 ^= set2
print(set1)  # $\{1, 2, 5\}`,
      },
      {
        type: 'subheading',
        content: 'Set Comprehensions',
      },
      {
        type: 'code',
        content: `# Basic set comprehension
squares = $\{x**2 for x in range(6)\}
print(squares)  # $\{0, 1, 4, 9, 16, 25\}

# With condition
even_squares = $\{x**2 for x in range(10) if x % 2 == 0\}
print(even_squares)  # $\{0, 4, 16, 36, 64\}

# Remove duplicates from list
numbers = [1, 2, 2, 3, 3, 3, 4]
unique = $\{x for x in numbers\}
print(unique)  # $\{1, 2, 3, 4\}`,
      },
      {
        type: 'subheading',
        content: 'Practical Set Uses',
      },
      {
        type: 'code',
        content: `# Remove duplicates
numbers = [1, 2, 2, 3, 3, 3, 4]
unique_nums = list(set(numbers))
print(unique_nums)  # [1, 2, 3, 4]

# Find common elements
list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]
common = set(list1) & set(list2)
print(common)  # $\{3, 4\}

# Find unique elements in each list
unique_to_list1 = set(list1) - set(list2)
print(unique_to_list1)  # $\{1, 2\}

# Check if lists have any common elements
has_common = len(set(list1) & set(list2)) > 0
print(has_common)  # True

# Membership testing (faster than lists for large collections)
large_set = set(range(1000000))
print(999999 in large_set)  # Very fast O(1)`,
      },
      {
        type: 'heading',
        content: '5. Dictionaries',
      },
      {
        type: 'text',
        content: 'Dictionaries store key-value pairs. Keys must be immutable (strings, numbers, tuples), and each key must be unique.',
      },
      {
        type: 'subheading',
        content: 'Creating Dictionaries',
      },
      {
        type: 'code',
        content: `# Empty dictionary
empty = $\{\}
empty2 = dict()

# Dictionary with elements
person = $\{
    "name": "Alice",
    "age": 25,
    "city": "New York"
\}

# Using dict() constructor
person2 = dict(name="Bob", age=30, city="LA")

# From list of tuples
pairs = [("a", 1), ("b", 2), ("c", 3)]
dict_from_pairs = dict(pairs)
print(dict_from_pairs)  # $\{'a': 1, 'b': 2, 'c': 3\}

# Using dict comprehension
squares = $\{x: x**2 for x in range(5)\}
print(squares)  # $\{0: 0, 1: 1, 2: 4, 3: 9, 4: 16\}

# Nested dictionaries
students = $\{
    "student1": $\{"name": "Alice", "grade": 90\},
    "student2": $\{"name": "Bob", "grade": 85\}
\}`,
      },
      {
        type: 'subheading',
        content: 'Accessing Dictionary Values',
      },
      {
        type: 'code',
        content: `person = $\{"name": "Alice", "age": 25, "city": "NYC"\}

# Using square brackets
print(person["name"])  # Alice

# Using get() method (safer - returns None if key not found)
print(person.get("name"))  # Alice
print(person.get("job"))   # None

# get() with default value
print(person.get("job", "Unknown"))  # Unknown

# KeyError with square brackets if key doesn't exist
# print(person["job"])  # Raises KeyError`,
      },
      {
        type: 'subheading',
        content: 'Adding and Updating Dictionary Elements',
      },
      {
        type: 'code',
        content: `person = $\{"name": "Alice", "age": 25\}

# Add new key-value pair
person["city"] = "NYC"
print(person)  # $\{'name': 'Alice', 'age': 25, 'city': 'NYC'\}

# Update existing value
person["age"] = 26
print(person)  # $\{'name': 'Alice', 'age': 26, 'city': 'NYC'\}

# update() method - Update with another dictionary
person.update($\{"city": "LA", "job": "Engineer"\})
print(person)  # $\{'name': 'Alice', 'age': 26, 'city': 'LA', 'job': 'Engineer'\}

# update() with keyword arguments
person.update(age=27, salary=80000)
print(person)

# setdefault() - Set value only if key doesn't exist
person.setdefault("country", "USA")
print(person["country"])  # USA

# Won't change existing key
person.setdefault("name", "Bob")
print(person["name"])  # Still Alice`,
      },
      {
        type: 'subheading',
        content: 'Removing Dictionary Elements',
      },
      {
        type: 'code',
        content: `person = $\{"name": "Alice", "age": 25, "city": "NYC", "job": "Engineer"\}

# pop() - Remove and return value
age = person.pop("age")
print(age)     # 25
print(person)  # $\{'name': 'Alice', 'city': 'NYC', 'job': 'Engineer'\}

# pop() with default (doesn't raise error if key not found)
salary = person.pop("salary", 0)
print(salary)  # 0

# popitem() - Remove and return last inserted key-value pair
last_item = person.popitem()
print(last_item)  # ('job', 'Engineer')
print(person)     # $\{'name': 'Alice', 'city': 'NYC'\}

# del statement - Delete specific key
del person["city"]
print(person)  # $\{'name': 'Alice'\}

# clear() - Remove all items
person = $\{"name": "Alice", "age": 25\}
person.clear()
print(person)  # $\{\}`,
      },
      {
        type: 'subheading',
        content: 'Dictionary Methods - Keys, Values, Items',
      },
      {
        type: 'code',
        content: `person = $\{"name": "Alice", "age": 25, "city": "NYC"\}

# keys() - Get all keys
keys = person.keys()
print(keys)  # dict_keys(['name', 'age', 'city'])
print(list(keys))  # ['name', 'age', 'city']

# values() - Get all values
values = person.values()
print(values)  # dict_values(['Alice', 25, 'NYC'])
print(list(values))  # ['Alice', 25, 'NYC']

# items() - Get all key-value pairs
items = person.items()
print(items)  # dict_items([('name', 'Alice'), ('age', 25), ('city', 'NYC')])
print(list(items))  # [('name', 'Alice'), ('age', 25), ('city', 'NYC')]

# Iterating through dictionary
for key in person:
    print(key)

for key in person.keys():
    print(key)

for value in person.values():
    print(value)

for key, value in person.items():
    print(f"$\{key\}: $\{value\}")`,
      },
      {
        type: 'subheading',
        content: 'Dictionary Methods - Checking and Copying',
      },
      {
        type: 'code',
        content: `person = $\{"name": "Alice", "age": 25, "city": "NYC"\}

# in operator - Check if key exists
print("name" in person)     # True
print("job" in person)      # False

# Check in values
print("Alice" in person.values())  # True

# len() - Get number of key-value pairs
print(len(person))  # 3

# copy() - Create shallow copy
copied = person.copy()
copied["name"] = "Bob"
print(person["name"])  # Alice (original unchanged)
print(copied["name"])  # Bob

# dict() constructor - Also creates copy
copied2 = dict(person)`,
      },
      {
        type: 'subheading',
        content: 'Dictionary Comprehensions',
      },
      {
        type: 'code',
        content: `# Basic dictionary comprehension
squares = $\{x: x**2 for x in range(6)\}
print(squares)  # $\{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25\}

# With condition
even_squares = $\{x: x**2 for x in range(10) if x % 2 == 0\}
print(even_squares)  # $\{0: 0, 2: 4, 4: 16, 6: 36, 8: 64\}

# From two lists
keys = ["name", "age", "city"]
values = ["Alice", 25, "NYC"]
person = $\{k: v for k, v in zip(keys, values)\}
print(person)  # $\{'name': 'Alice', 'age': 25, 'city': 'NYC'\}

# Invert dictionary (swap keys and values)
original = $\{"a": 1, "b": 2, "c": 3\}
inverted = $\{v: k for k, v in original.items()\}
print(inverted)  # $\{1: 'a', 2: 'b', 3: 'c'\}

# Conditional key-value transformation
prices = $\{"apple": 1.20, "banana": 0.50, "cherry": 2.50\}
expensive = $\{k: v for k, v in prices.items() if v > 1.0\}
print(expensive)  # $\{'apple': 1.2, 'cherry': 2.5\}`,
      },
      {
        type: 'subheading',
        content: 'Nested Dictionaries',
      },
      {
        type: 'code',
        content: `# Nested dictionary
students = $\{
    "student1": $\{
        "name": "Alice",
        "age": 20,
        "grades": [90, 85, 92]
    \},
    "student2": $\{
        "name": "Bob",
        "age": 21,
        "grades": [88, 90, 87]
    \}
\}

# Accessing nested values
print(students["student1"]["name"])  # Alice
print(students["student1"]["grades"][0])  # 90

# Iterating nested dictionary
for student_id, student_info in students.items():
    print(f"$\{student_id\}:")
    for key, value in student_info.items():
        print(f"  $\{key\}: $\{value\}")`,
      },
      {
        type: 'subheading',
        content: 'DefaultDict and OrderedDict',
      },
      {
        type: 'code',
        content: `from collections import defaultdict, OrderedDict

# defaultdict - Provides default value for missing keys
word_count = defaultdict(int)  # default value is 0
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]

for word in words:
    word_count[word] += 1  # No KeyError even if key doesn't exist

print(dict(word_count))  # $\{'apple': 3, 'banana': 2, 'cherry': 1\}

# defaultdict with list
groups = defaultdict(list)
groups["fruits"].append("apple")
groups["fruits"].append("banana")
groups["vegetables"].append("carrot")
print(dict(groups))  # $\{'fruits': ['apple', 'banana'], 'vegetables': ['carrot']\}

# OrderedDict - Maintains insertion order (less needed in Python 3.7+)
ordered = OrderedDict()
ordered["a"] = 1
ordered["b"] = 2
ordered["c"] = 3
print(ordered)  # OrderedDict([('a', 1), ('b', 2), ('c', 3)])`,
      },
      {
        type: 'subheading',
        content: 'Practical Dictionary Examples',
      },
      {
        type: 'code',
        content: `# Count word frequency
text = "hello world hello python world"
words = text.split()
freq = $\{\}

for word in words:
    freq[word] = freq.get(word, 0) + 1

print(freq)  # $\{'hello': 2, 'world': 2, 'python': 1\}

# Group items by property
students = [
    $\{"name": "Alice", "grade": "A"\},
    $\{"name": "Bob", "grade": "B"\},
    $\{"name": "Charlie", "grade": "A"\}
]

by_grade = $\{\}
for student in students:
    grade = student["grade"]
    if grade not in by_grade:
        by_grade[grade] = []
    by_grade[grade].append(student["name"])

print(by_grade)  # $\{'A': ['Alice', 'Charlie'], 'B': ['Bob']\}

# Merge dictionaries (Python 3.9+)
dict1 = $\{"a": 1, "b": 2\}
dict2 = $\{"c": 3, "d": 4\}
merged = dict1 | dict2
print(merged)  # $\{'a': 1, 'b': 2, 'c': 3, 'd': 4\}

# Merge with ** unpacking
merged2 = $\{**dict1, **dict2\}
print(merged2)  # $\{'a': 1, 'b': 2, 'c': 3, 'd': 4\}`,
      },
      {
        type: 'note',
        content: 'Choose the right data structure: Use strings for text, lists for ordered mutable collections, tuples for immutable data, sets for unique elements and fast lookups, and dictionaries for key-value mappings.',
      },
      {
        type: 'note',
        content: 'Performance: Dictionary and set lookups are O(1) on average, making them very fast. List lookups are O(n). Consider using sets or dictionaries when you need fast membership testing.',
      },
    ],
  },

  'functions': {
    title: 'Functions',
    description: 'Master Python functions with comprehensive coverage of parameters, return values, scope, decorators, and advanced functional programming concepts.',
    sections: [
      {
        type: 'heading',
        content: '1. Function Basics',
      },
      {
        type: 'text',
        content: 'Functions are reusable blocks of code that perform a specific task. They help organize code, avoid repetition, and make programs more modular.',
      },
      {
        type: 'subheading',
        content: 'Defining and Calling Functions',
      },
      {
        type: 'code',
        content: `# Defining a function
def greet():
    """Simple function with no parameters."""
    print("Hello, World!")

# Calling a function
greet()  # Output: Hello, World!

# Function with no return (returns None)
def say_hello():
    print("Hello")

result = say_hello()
print(result)  # None`,
      },
      {
        type: 'subheading',
        content: 'Function Naming Conventions',
      },
      {
        type: 'code',
        content: `# Use snake_case for function names
def calculate_total():
    pass

def get_user_name():
    pass

def is_valid():
    pass

# Use verbs for function names (they perform actions)
def fetch_data():
    pass

def process_records():
    pass

def validate_input():
    pass`,
      },
      {
        type: 'heading',
        content: '2. Function Parameters',
      },
      {
        type: 'text',
        content: 'Parameters (also called arguments) allow you to pass data into functions. Python supports multiple types of parameters.',
      },
      {
        type: 'subheading',
        content: 'Positional Parameters',
      },
      {
        type: 'code',
        content: `# Single parameter
def greet_person(name):
    print(f"Hello, $\{name\}!")

greet_person("Alice")  # Hello, Alice!
greet_person("Bob")    # Hello, Bob!

# Multiple parameters (order matters)
def add_numbers(a, b):
    result = a + b
    print(f"$\{a\} + $\{b\} = $\{result\}")

add_numbers(5, 3)  # 5 + 3 = 8
add_numbers(3, 5)  # 3 + 5 = 8

# Three or more parameters
def calculate_volume(length, width, height):
    volume = length * width * height
    return volume

print(calculate_volume(2, 3, 4))  # 24`,
      },
      {
        type: 'subheading',
        content: 'Keyword Parameters',
      },
      {
        type: 'code',
        content: `# Pass arguments by name (order doesn't matter)
def create_profile(name, age, city):
    print(f"$\{name\}, $\{age\} years old, from $\{city\}")

# Positional arguments
create_profile("Alice", 25, "New York")

# Keyword arguments (order doesn't matter)
create_profile(age=25, name="Alice", city="New York")
create_profile(city="Boston", name="Bob", age=30)

# Mix positional and keyword (positional must come first)
create_profile("Charlie", age=35, city="Chicago")`,
      },
      {
        type: 'subheading',
        content: 'Parameter Types Summary',
      },
      {
        type: 'code',
        content: `# Positional-only parameters (before /)
def pos_only(a, b, /):
    return a + b

print(pos_only(1, 2))  # 3
# pos_only(a=1, b=2)  # Error!

# Keyword-only parameters (after *)
def kw_only(*, x, y):
    return x * y

print(kw_only(x=3, y=4))  # 12
# kw_only(3, 4)  # Error!

# Combined: positional-only, normal, keyword-only
def combined(pos_only, /, normal, *, kw_only):
    return pos_only + normal + kw_only

print(combined(1, 2, kw_only=3))  # 6`,
      },
      {
        type: 'heading',
        content: '3. Default Parameters',
      },
      {
        type: 'text',
        content: 'Default parameters have preset values that are used if no argument is provided.',
      },
      {
        type: 'code',
        content: `# Single default parameter
def greet(name, greeting="Hello"):
    print(f"$\{greeting\}, $\{name\}!")

greet("Alice")              # Hello, Alice!
greet("Bob", "Hi")          # Hi, Bob!
greet("Charlie", "Hey")     # Hey, Charlie!

# Multiple default parameters
def power(base, exponent=2):
    return base ** exponent

print(power(5))      # 25 (5^2)
print(power(5, 3))   # 125 (5^3)

# All parameters with defaults
def create_user(name="Guest", role="User", active=True):
    return $\{"name": name, "role": role, "active": active\}

print(create_user())  # All defaults
print(create_user("Alice"))  # Custom name
print(create_user("Bob", "Admin"))  # Custom name and role`,
      },
      {
        type: 'subheading',
        content: 'Mutable Default Arguments (Common Pitfall)',
      },
      {
        type: 'code',
        content: `# WRONG: Mutable default arguments are shared between calls
def add_item_wrong(item, items=[]):
    items.append(item)
    return items

print(add_item_wrong("apple"))   # ['apple']
print(add_item_wrong("banana"))  # ['apple', 'banana'] - Unexpected!

# CORRECT: Use None and create new list inside
def add_item_correct(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item_correct("apple"))   # ['apple']
print(add_item_correct("banana"))  # ['banana'] - Correct!`,
      },
      {
        type: 'heading',
        content: '4. Return Values',
      },
      {
        type: 'text',
        content: 'Functions can return values using the return statement. A function without a return statement returns None.',
      },
      {
        type: 'subheading',
        content: 'Basic Return',
      },
      {
        type: 'code',
        content: `# Simple return
def multiply(a, b):
    return a * b

result = multiply(4, 5)
print(result)  # 20

# Return with expression
def is_even(number):
    return number % 2 == 0

print(is_even(4))  # True
print(is_even(7))  # False

# Early return
def divide(a, b):
    if b == 0:
        return "Cannot divide by zero"
    return a / b

print(divide(10, 2))  # 5.0
print(divide(10, 0))  # Cannot divide by zero`,
      },
      {
        type: 'subheading',
        content: 'Multiple Return Values',
      },
      {
        type: 'code',
        content: `# Return multiple values (actually returns a tuple)
def get_person_info():
    name = "Alice"
    age = 25
    city = "NYC"
    return name, age, city

# Unpack returned values
person_name, person_age, person_city = get_person_info()
print(person_name)  # Alice

# Or capture as tuple
info = get_person_info()
print(info)  # ('Alice', 25, 'NYC')

# Return tuple explicitly
def get_coordinates():
    return (10, 20)

x, y = get_coordinates()

# Return list or dictionary
def get_stats():
    return $\{"min": 1, "max": 100, "avg": 50\}

stats = get_stats()
print(stats["avg"])  # 50`,
      },
      {
        type: 'subheading',
        content: 'Return None',
      },
      {
        type: 'code',
        content: `# No return statement (returns None)
def print_message(msg):
    print(msg)

result = print_message("Hello")
print(result)  # None

# Explicit return None
def validate(value):
    if value < 0:
        return None
    return value

print(validate(10))   # 10
print(validate(-5))   # None

# Empty return (also returns None)
def process():
    # Some processing...
    return

result = process()
print(result)  # None`,
      },

      {
        type: 'heading',
        content: '5. *args and **kwargs',
      },
      {
        type: 'text',
        content: 'Variable-length arguments allow functions to accept any number of positional or keyword arguments.',
      },
      {
        type: 'subheading',
        content: '*args - Variable Positional Arguments',
      },
      {
        type: 'code',
        content: `# *args collects extra positional arguments into a tuple
def sum_all(*numbers):
    """Sum any number of arguments."""
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))        # 6
print(sum_all(1, 2, 3, 4, 5))  # 15
print(sum_all(10))             # 10

# *args with other parameters
def greet_all(greeting, *names):
    for name in names:
        print(f"$\{greeting\}, $\{name\}!")

greet_all("Hello", "Alice", "Bob", "Charlie")
# Output:
# Hello, Alice!
# Hello, Bob!
# Hello, Charlie!

# *args is actually a tuple
def show_args(*args):
    print(type(args))  # <class 'tuple'>
    print(args)

show_args(1, 2, 3)  # (1, 2, 3)`,
      },
      {
        type: 'subheading',
        content: '**kwargs - Variable Keyword Arguments',
      },
      {
        type: 'code',
        content: `# **kwargs collects extra keyword arguments into a dictionary
def print_info(**info):
    """Print any number of key-value pairs."""
    for key, value in info.items():
        print(f"$\{key\}: $\{value\}")

print_info(name="Alice", age=25, city="New York")
# Output:
# name: Alice
# age: 25
# city: New York

# **kwargs with other parameters
def create_user(username, **details):
    print(f"Username: $\{username\}")
    for key, value in details.items():
        print(f"$\{key\}: $\{value\}")

create_user("alice123", email="alice@email.com", age=25, role="Admin")

# **kwargs is actually a dictionary
def show_kwargs(**kwargs):
    print(type(kwargs))  # <class 'dict'>
    print(kwargs)

show_kwargs(a=1, b=2)  # $\{'a': 1, 'b': 2\}`,
      },
      {
        type: 'subheading',
        content: 'Combining *args and **kwargs',
      },
      {
        type: 'code',
        content: `# Combine both for maximum flexibility
def flexible_function(*args, **kwargs):
    print("Positional arguments:", args)
    print("Keyword arguments:", kwargs)

flexible_function(1, 2, 3, name="Alice", age=25)
# Positional arguments: (1, 2, 3)
# Keyword arguments: $\{'name': 'Alice', 'age': 25\}

# Standard order: regular args, *args, **kwargs
def complete_function(a, b, *args, **kwargs):
    print(f"a=$\{a\}, b=$\{b\}")
    print(f"args=$\{args\}")
    print(f"kwargs=$\{kwargs\}")

complete_function(1, 2, 3, 4, x=10, y=20)
# a=1, b=2
# args=(3, 4)
# kwargs=$\{'x': 10, 'y': 20\}`,
      },
      {
        type: 'subheading',
        content: 'Unpacking with * and **',
      },
      {
        type: 'code',
        content: `# Use * to unpack list/tuple into arguments
def add_three(a, b, c):
    return a + b + c

numbers = [1, 2, 3]
print(add_three(*numbers))  # 6 (same as add_three(1, 2, 3))

# Use ** to unpack dictionary into keyword arguments
def create_profile(name, age, city):
    print(f"$\{name\}, $\{age\}, $\{city\}")

user_data = $\{"name": "Alice", "age": 25, "city": "NYC"\}
create_profile(**user_data)  # Alice, 25, NYC`,
      },
      {
        type: 'heading',
        content: '6. Lambda Functions',
      },
      {
        type: 'text',
        content: 'Lambda functions are small, anonymous functions defined with the lambda keyword. They can have any number of parameters but only one expression.',
      },
      {
        type: 'subheading',
        content: 'Lambda Basics',
      },
      {
        type: 'code',
        content: `# Regular function
def square(x):
    return x ** 2

# Lambda function (same thing)
square_lambda = lambda x: x ** 2

print(square(5))         # 25
print(square_lambda(5))  # 25

# Lambda with multiple parameters
add = lambda a, b: a + b
print(add(3, 4))  # 7

multiply = lambda x, y, z: x * y * z
print(multiply(2, 3, 4))  # 24

# Lambda with default parameters
power = lambda x, n=2: x ** n
print(power(5))      # 25 (5^2)
print(power(5, 3))   # 125 (5^3)`,
      },
      {
        type: 'subheading',
        content: 'Lambda with Built-in Functions',
      },
      {
        type: 'code',
        content: `# map() - Apply function to each item
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# filter() - Filter items based on condition
even_nums = list(filter(lambda x: x % 2 == 0, numbers))
print(even_nums)  # [2, 4]

odd_nums = list(filter(lambda x: x % 2 != 0, numbers))
print(odd_nums)  # [1, 3, 5]

# sorted() - Sort with custom key
words = ["python", "is", "awesome", "language"]
sorted_by_length = sorted(words, key=lambda x: len(x))
print(sorted_by_length)  # ['is', 'python', 'awesome', 'language']

# Sort by last character
sorted_by_last = sorted(words, key=lambda x: x[-1])
print(sorted_by_last)`,
      },
      {
        type: 'subheading',
        content: 'Lambda with Data Structures',
      },
      {
        type: 'code',
        content: `# Sort list of tuples
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]

# Sort by grade
by_grade = sorted(students, key=lambda x: x[1])
print(by_grade)  # [('Charlie', 78), ('Alice', 85), ('Bob', 92)]

# Sort list of dictionaries
users = [
    $\{"name": "Alice", "age": 25\},
    $\{"name": "Bob", "age": 30\},
    $\{"name": "Charlie", "age": 20\}
]

by_age = sorted(users, key=lambda x: x["age"])
print(by_age)

# Lambda in list comprehension
numbers = [1, 2, 3, 4, 5]
result = [(lambda x: x**2)(x) for x in numbers]
print(result)  # [1, 4, 9, 16, 25]`,
      },
      {
        type: 'subheading',
        content: 'When to Use Lambda',
      },
      {
        type: 'code',
        content: `# GOOD: Simple, one-time use
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))

# BAD: Complex logic (use regular function instead)
# calculate = lambda x: x**2 if x > 0 else -x**2 if x < 0 else 0  # Hard to read!

# GOOD: Regular function for complex logic
def calculate(x):
    if x > 0:
        return x**2
    elif x < 0:
        return -x**2
    else:
        return 0

# GOOD: Used with higher-order functions
data = [5, 2, 8, 1, 9]
max_value = max(data, key=lambda x: x)  # Though just max(data) is better here
sorted_data = sorted(data, key=lambda x: -x)  # Sort descending`,
      },
      {
        type: 'heading',
        content: '7. Variable Scope',
      },
      {
        type: 'text',
        content: 'Scope determines where variables can be accessed. Python has local, enclosing, global, and built-in (LEGB) scopes.',
      },
      {
        type: 'subheading',
        content: 'Local Scope',
      },
      {
        type: 'code',
        content: `# Variables defined inside a function are local
def my_function():
    x = 10  # Local variable
    print(x)

my_function()  # 10
# print(x)  # NameError: x is not defined

# Each function call has its own local scope
def increment():
    count = 0
    count += 1
    return count

print(increment())  # 1
print(increment())  # 1 (not 2, because count is recreated each time)`,
      },
      {
        type: 'subheading',
        content: 'Global Scope',
      },
      {
        type: 'code',
        content: `# Variables defined outside functions are global
x = 100  # Global variable

def print_global():
    print(x)  # Can read global variable

print_global()  # 100

# To modify global variable, use 'global' keyword
counter = 0

def increment():
    global counter
    counter += 1

increment()
print(counter)  # 1
increment()
print(counter)  # 2

# Without 'global', creates new local variable
value = 10

def try_modify():
    value = 20  # Creates local variable, doesn't modify global

try_modify()
print(value)  # 10 (global unchanged)`,
      },
      {
        type: 'subheading',
        content: 'Nonlocal Scope',
      },
      {
        type: 'code',
        content: `# nonlocal refers to variables in enclosing (but not global) scope
def outer():
    x = 10
    
    def inner():
        nonlocal x
        x = 20  # Modifies outer's x
    
    inner()
    print(x)  # 20

outer()

# Without nonlocal, creates new local variable
def outer2():
    x = 10
    
    def inner():
        x = 20  # Creates new local x
    
    inner()
    print(x)  # 10 (outer's x unchanged)

outer2()`,
      },
      {
        type: 'subheading',
        content: 'LEGB Rule',
      },
      {
        type: 'code',
        content: `# Python searches for variables in this order:
# Local -> Enclosing -> Global -> Built-in

x = "global"

def outer():
    x = "enclosing"
    
    def inner():
        x = "local"
        print(x)  # local
    
    inner()
    print(x)  # enclosing

outer()
print(x)  # global

# Built-in scope (functions like print, len, etc.)
def my_func():
    print("Hello")  # 'print' is from built-in scope`,
      },
      {
        type: 'heading',
        content: '8. Docstrings',
      },
      {
        type: 'text',
        content: 'Docstrings document what a function does. They appear as the first statement in a function and are enclosed in triple quotes.',
      },
      {
        type: 'code',
        content: `# Simple docstring
def greet(name):
    """Greet a person by name."""
    return f"Hello, $\{name\}!"

# Access docstring
print(greet.__doc__)  # Greet a person by name.

# Detailed docstring (Google style)
def calculate_area(width, height):
    """
    Calculate the area of a rectangle.
    
    Args:
        width (float): The width of the rectangle.
        height (float): The height of the rectangle.
    
    Returns:
        float: The area of the rectangle.
    
    Examples:
        >>> calculate_area(5, 3)
        15.0
    """
    return width * height

# NumPy/SciPy style docstring
def divide(a, b):
    """
    Divide two numbers.
    
    Parameters
    ----------
    a : float
        The numerator.
    b : float
        The denominator.
    
    Returns
    -------
    float
        The result of division.
    
    Raises
    ------
    ValueError
        If b is zero.
    """
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b`,
      },
      {
        type: 'heading',
        content: '9. Recursive Functions',
      },
      {
        type: 'text',
        content: 'Recursive functions call themselves to solve problems by breaking them down into smaller sub-problems.',
      },
      {
        type: 'subheading',
        content: 'Basic Recursion',
      },
      {
        type: 'code',
        content: `# Calculate factorial using recursion
def factorial(n):
    """Calculate factorial of n."""
    # Base case
    if n == 0 or n == 1:
        return 1
    # Recursive case
    return n * factorial(n - 1)

print(factorial(5))  # 120 (5 * 4 * 3 * 2 * 1)
print(factorial(0))  # 1

# Countdown using recursion
def countdown(n):
    if n <= 0:
        print("Blastoff!")
    else:
        print(n)
        countdown(n - 1)

countdown(5)  # 5, 4, 3, 2, 1, Blastoff!`,
      },
      {
        type: 'subheading',
        content: 'Classic Recursive Examples',
      },
      {
        type: 'code',
        content: `# Fibonacci sequence
def fibonacci(n):
    """Return the nth Fibonacci number."""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(6))  # 8
print([fibonacci(i) for i in range(10)])  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# Sum of list using recursion
def sum_list(numbers):
    """Sum a list recursively."""
    if not numbers:  # Base case: empty list
        return 0
    return numbers[0] + sum_list(numbers[1:])

print(sum_list([1, 2, 3, 4, 5]))  # 15

# Power function
def power(base, exp):
    """Calculate base^exp recursively."""
    if exp == 0:
        return 1
    return base * power(base, exp - 1)

print(power(2, 5))  # 32`,
      },
      {
        type: 'subheading',
        content: 'Recursion with Multiple Recursive Calls',
      },
      {
        type: 'code',
        content: `# Binary tree traversal
def print_tree(node, level=0):
    """Print tree structure."""
    if node is None:
        return
    print("  " * level + str(node))
    if hasattr(node, 'left'):
        print_tree(node.left, level + 1)
    if hasattr(node, 'right'):
        print_tree(node.right, level + 1)

# Tower of Hanoi
def hanoi(n, source, target, auxiliary):
    """Solve Tower of Hanoi puzzle."""
    if n == 1:
        print(f"Move disk 1 from $\{source\} to $\{target\}")
        return
    hanoi(n-1, source, auxiliary, target)
    print(f"Move disk $\{n\} from $\{source\} to $\{target\}")
    hanoi(n-1, auxiliary, target, source)

hanoi(3, 'A', 'C', 'B')`,
      },
      {
        type: 'subheading',
        content: 'Recursion vs Iteration',
      },
      {
        type: 'code',
        content: `# Recursive factorial
def factorial_recursive(n):
    if n <= 1:
        return 1
    return n * factorial_recursive(n - 1)

# Iterative factorial (often more efficient)
def factorial_iterative(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial_recursive(5))  # 120
print(factorial_iterative(5))  # 120

# Note: Recursion uses more memory (call stack)
# but can be more elegant for certain problems`,
      },
      {
        type: 'heading',
        content: '10. Higher-Order Functions',
      },
      {
        type: 'text',
        content: 'Higher-order functions take other functions as arguments or return functions as results.',
      },
      {
        type: 'subheading',
        content: 'map() Function',
      },
      {
        type: 'code',
        content: `# map(function, iterable) - Apply function to each item
numbers = [1, 2, 3, 4, 5]

# Square each number
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Convert to strings
strings = list(map(str, numbers))
print(strings)  # ['1', '2', '3', '4', '5']

# Multiple iterables
nums1 = [1, 2, 3]
nums2 = [4, 5, 6]
added = list(map(lambda x, y: x + y, nums1, nums2))
print(added)  # [5, 7, 9]`,
      },
      {
        type: 'subheading',
        content: 'filter() Function',
      },
      {
        type: 'code',
        content: `# filter(function, iterable) - Filter items based on condition
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Get even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8, 10]

# Get numbers greater than 5
greater_than_5 = list(filter(lambda x: x > 5, numbers))
print(greater_than_5)  # [6, 7, 8, 9, 10]

# Filter None values
values = [1, None, 2, None, 3, 4, None]
filtered = list(filter(None, values))
print(filtered)  # [1, 2, 3, 4]`,
      },
      {
        type: 'subheading',
        content: 'reduce() Function',
      },
      {
        type: 'code',
        content: `from functools import reduce

# reduce(function, iterable) - Reduce iterable to single value
numbers = [1, 2, 3, 4, 5]

# Sum all numbers
total = reduce(lambda x, y: x + y, numbers)
print(total)  # 15

# Product of all numbers
product = reduce(lambda x, y: x * y, numbers)
print(product)  # 120

# Find maximum
max_value = reduce(lambda x, y: x if x > y else y, numbers)
print(max_value)  # 5

# With initial value
total_with_initial = reduce(lambda x, y: x + y, numbers, 10)
print(total_with_initial)  # 25 (10 + 15)`,
      },
      {
        type: 'subheading',
        content: 'Functions Returning Functions',
      },
      {
        type: 'code',
        content: `# Function that returns a function
def multiplier(factor):
    """Return a function that multiplies by factor."""
    def multiply(x):
        return x * factor
    return multiply

times_two = multiplier(2)
times_three = multiplier(3)

print(times_two(5))    # 10
print(times_three(5))  # 15

# Power function generator
def power_of(exponent):
    return lambda base: base ** exponent

square = power_of(2)
cube = power_of(3)

print(square(4))  # 16
print(cube(4))    # 64`,
      },
      {
        type: 'heading',
        content: '11. Decorators',
      },
      {
        type: 'text',
        content: 'Decorators are functions that modify the behavior of other functions. They use the @ syntax.',
      },
      {
        type: 'subheading',
        content: 'Basic Decorator',
      },
      {
        type: 'code',
        content: `# Simple decorator
def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

# Apply decorator using @
@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Before function call
# Hello!
# After function call

# Equivalent to: say_hello = my_decorator(say_hello)`,
      },
      {
        type: 'subheading',
        content: 'Decorator with Arguments',
      },
      {
        type: 'code',
        content: `# Decorator that handles function arguments
def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Calling $\{func.__name__\} with args=$\{args\}, kwargs=$\{kwargs\}")
        result = func(*args, **kwargs)
        print(f"$\{func.__name__\} returned $\{result\}")
        return result
    return wrapper

@logger
def add(a, b):
    return a + b

result = add(3, 5)
# Output:
# Calling add with args=(3, 5), kwargs=$\{\}
# add returned 8`,
      },
      {
        type: 'subheading',
        content: 'Practical Decorators',
      },
      {
        type: 'code',
        content: `import time

# Timing decorator
def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"$\{func.__name__\} took $\{end-start:.4f\} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done"

slow_function()  # slow_function took 1.0001 seconds

# Caching decorator (memoization)
def memoize(func):
    cache = $\{\}
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return wrapper

@memoize
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(35))  # Much faster with caching!`,
      },
      {
        type: 'subheading',
        content: 'Multiple Decorators',
      },
      {
        type: 'code',
        content: `# Apply multiple decorators
def uppercase(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

def exclaim(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result + "!"
    return wrapper

@exclaim
@uppercase
def greet(name):
    return f"hello, $\{name\}"

print(greet("alice"))  # HELLO, ALICE!
# Applied bottom-to-top: uppercase first, then exclaim`,
      },
      {
        type: 'heading',
        content: '12. Closures',
      },
      {
        type: 'text',
        content: 'A closure is a function that remembers values from its enclosing scope even after the outer function has finished executing.',
      },
      {
        type: 'code',
        content: `# Basic closure
def outer(x):
    def inner(y):
        return x + y  # inner remembers x
    return inner

add_five = outer(5)
add_ten = outer(10)

print(add_five(3))   # 8
print(add_ten(3))    # 13

# Closure with state
def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter1 = counter()
print(counter1())  # 1
print(counter1())  # 2
print(counter1())  # 3

counter2 = counter()
print(counter2())  # 1 (separate state)

# Practical closure example
def make_multiplier(n):
    def multiplier(x):
        return x * n
    return multiplier

times2 = make_multiplier(2)
times3 = make_multiplier(3)

print(times2(10))  # 20
print(times3(10))  # 30`,
      },
      {
        type: 'heading',
        content: '13. Generators and yield',
      },
      {
        type: 'text',
        content: 'Generators are functions that use yield to return values one at a time, creating iterators efficiently.',
      },
      {
        type: 'code',
        content: `# Simple generator
def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

# Use generator
for num in count_up_to(5):
    print(num)  # 1, 2, 3, 4, 5

# Generator saves memory
def fibonacci_gen(n):
    a, b = 0, 1
    count = 0
    while count < n:
        yield a
        a, b = b, a + b
        count += 1

fib = fibonacci_gen(10)
print(list(fib))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# Generator expression (like list comprehension)
squares = (x**2 for x in range(10))
print(list(squares))  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Infinite generator
def infinite_sequence():
    num = 0
    while True:
        yield num
        num += 1

gen = infinite_sequence()
print(next(gen))  # 0
print(next(gen))  # 1
print(next(gen))  # 2`,
      },
      {
        type: 'heading',
        content: '14. Function Annotations',
      },
      {
        type: 'text',
        content: 'Function annotations provide type hints for parameters and return values. They don\'t enforce types but help with documentation and IDE support.',
      },
      {
        type: 'code',
        content: `# Type annotations
def greet(name: str) -> str:
    return f"Hello, $\{name\}!"

def add(a: int, b: int) -> int:
    return a + b

# Complex types
from typing import List, Dict, Tuple, Optional

def process_items(items: List[str]) -> Dict[str, int]:
    return $\{item: len(item) for item in items\}

def get_user(user_id: int) -> Optional[Dict[str, str]]:
    # Returns dict or None
    if user_id > 0:
        return $\{"name": "Alice", "email": "alice@email.com"\}
    return None

# Multiple return types
def divide(a: float, b: float) -> Tuple[float, float]:
    quotient = a // b
    remainder = a % b
    return quotient, remainder`,
      },
      {
        type: 'note',
        content: 'Best Practices: Use descriptive function names, keep functions short and focused (do one thing well), use docstrings, avoid too many parameters, and prefer returning values over modifying global state.',
      },
      {
        type: 'note',
        content: 'Built-in functions like print(), len(), type(), input(), sum(), max(), min() are already provided by Python. Create user-defined functions for custom logic and reusability.',
      },
    ],
  },

  'modules': {
    title: 'Modules & Packages',
    description: 'Master Python modules and packages with comprehensive coverage of importing, creating custom modules, the standard library, and package management.',
    sections: [
      {
        type: 'heading',
        content: '1. What are Modules?',
      },
      {
        type: 'text',
        content: 'A module is a file containing Python code (functions, classes, variables). Modules help organize code, promote reusability, and create namespaces to avoid naming conflicts.',
      },
      {
        type: 'code',
        content: `# Any .py file is a module
# Example: math.py, random.py, mymodule.py

# Benefits of modules:
# 1. Code organization - Group related functionality
# 2. Reusability - Use the same code in multiple programs
# 3. Namespace separation - Avoid name conflicts
# 4. Easier maintenance - Changes in one place`,
      },
      {
        type: 'heading',
        content: '2. Importing Modules',
      },
      {
        type: 'text',
        content: 'Python provides several ways to import modules and access their contents.',
      },
      {
        type: 'subheading',
        content: 'Import Entire Module',
      },
      {
        type: 'code',
        content: `# Import entire module
import math

# Access module contents with dot notation
print(math.pi)        # 3.14159265359
print(math.sqrt(16))  # 4.0
print(math.ceil(4.3)) # 5
print(math.floor(4.7)) # 4

# Multiple imports
import math, random, os`,
      },
      {
        type: 'subheading',
        content: 'Import Specific Items',
      },
      {
        type: 'code',
        content: `# Import specific functions/variables
from math import pi, sqrt, ceil

# Use directly without module prefix
print(pi)       # 3.14159265359
print(sqrt(25)) # 5.0
print(ceil(4.3)) # 5

# Import multiple specific items
from random import randint, choice, shuffle

# Import from multiple modules
from math import sqrt
from random import randint
from datetime import datetime`,
      },
      {
        type: 'subheading',
        content: 'Import with Alias',
      },
      {
        type: 'code',
        content: `# Module alias (shorter name)
import math as m
print(m.sqrt(16))  # 4.0

# Common aliases
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Alias for specific imports
from datetime import datetime as dt
now = dt.now()
print(now)

# Multiple aliases
from math import sqrt as square_root
from math import ceil as ceiling
print(square_root(16))  # 4.0
print(ceiling(4.3))     # 5`,
      },
      {
        type: 'subheading',
        content: 'Import All (Not Recommended)',
      },
      {
        type: 'code',
        content: `# Import everything from module
from math import *

# Can use all functions directly
print(pi)      # 3.14159265359
print(sqrt(9)) # 3.0
print(cos(0))  # 1.0

# ⚠️ Problems with import *:
# 1. Namespace pollution - unclear where names come from
# 2. Name conflicts - can override existing names
# 3. Hard to debug - which module has what?

# Example of conflict:
from math import *
from statistics import *
# If both have 'mean', which one is used?

# BETTER: Be explicit
from math import sqrt, pi
from statistics import mean`,
      },
      {
        type: 'heading',
        content: '3. Creating Custom Modules',
      },
      {
        type: 'text',
        content: 'Any Python file (.py) can be used as a module. Simply create a file with functions, classes, or variables.',
      },
      {
        type: 'subheading',
        content: 'Basic Custom Module',
      },
      {
        type: 'code',
        language: 'python',
        content: `# File: mymodule.py

"""
This is a custom module for demonstration.
It contains utility functions and constants.
"""

# Module-level constant
PI = 3.14159

# Functions
def greet(name):
    """Greet a person by name."""
    return f"Hello, $\{name\}!"

def add(a, b):
    """Add two numbers."""
    return a + b

def multiply(a, b):
    """Multiply two numbers."""
    return a * b

# Private function (by convention, starts with _)
def _internal_helper():
    """Not intended for external use."""
    return "Internal use only"

# Module initialization code
print("mymodule loaded")`,
      },
      {
        type: 'text',
        content: 'Import and use the custom module:',
      },
      {
        type: 'code',
        content: `# File: main.py
import mymodule

# Use module contents
print(mymodule.greet("Alice"))  # Hello, Alice!
print(mymodule.add(5, 3))       # 8
print(mymodule.PI)              # 3.14159

# Different import styles
from mymodule import greet, add
print(greet("Bob"))  # Hello, Bob!
print(add(10, 20))   # 30

# Import with alias
import mymodule as mm
print(mm.multiply(4, 5))  # 20`,
      },
      {
        type: 'subheading',
        content: 'Module with __name__ == "__main__"',
      },
      {
        type: 'code',
        language: 'python',
        content: `# File: calculator.py

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

# Code that runs only when file is executed directly
if __name__ == "__main__":
    # Test code
    print("Testing calculator module...")
    print(f"2 + 3 = $\{add(2, 3)\}")
    print(f"5 - 2 = $\{subtract(5, 2)\}")
    print(f"4 * 3 = $\{multiply(4, 3)\}")

# When imported: __name__ is "calculator" (test code doesn't run)
# When executed: __name__ is "__main__" (test code runs)`,
      },
      {
        type: 'subheading',
        content: 'Module Attributes',
      },
      {
        type: 'code',
        content: `import math

# __name__ - Module name
print(math.__name__)  # math

# __file__ - Module file path
print(math.__file__)  # /path/to/math.py

# __doc__ - Module docstring
print(math.__doc__)  # This module provides access to mathematical functions

# dir() - List all names in module
print(dir(math))  # ['__doc__', '__name__', 'pi', 'sqrt', 'ceil', ...]

# help() - Get help on module
help(math)  # Shows detailed documentation`,
      },
      {
        type: 'heading',
        content: '4. Module Search Path',
      },
      {
        type: 'text',
        content: 'Python searches for modules in specific locations defined in sys.path.',
      },
      {
        type: 'code',
        content: `import sys

# View module search path
print(sys.path)
# Output: [
#   '',  # Current directory (first!)
#   '/usr/lib/python3.x',  # Standard library
#   '/usr/lib/python3.x/site-packages',  # Third-party packages
#   ...
# ]

# Python searches in this order:
# 1. Current directory
# 2. PYTHONPATH environment variable
# 3. Standard library directories
# 4. Site-packages (third-party)

# Add custom path
sys.path.append('/my/custom/modules')

# Insert at beginning (highest priority)
sys.path.insert(0, '/priority/modules')`,
      },
      {
        type: 'heading',
        content: '5. Reloading Modules',
      },
      {
        type: 'text',
        content: 'Modules are loaded only once. To reload a modified module, use importlib.reload().',
      },
      {
        type: 'code',
        content: `import importlib
import mymodule

# Module is loaded

# ... Make changes to mymodule.py ...

# Reload the module
importlib.reload(mymodule)

# Note: import mymodule again won't reload it!
# Must use importlib.reload()`,
      },
      {
        type: 'heading',
        content: '6. dir() and help() Functions',
      },
      {
        type: 'text',
        content: 'Use dir() to list module contents and help() to get documentation.',
      },
      {
        type: 'code',
        content: `import math

# dir() - List all names in module
contents = dir(math)
print(contents)
# ['__doc__', '__name__', 'acos', 'asin', 'atan', 'ceil', 'cos', 'pi', 'sqrt', ...]

# Filter out private attributes
public_items = [item for item in dir(math) if not item.startswith('_')]
print(public_items)

# help() - Get detailed documentation
help(math)  # Full module documentation
help(math.sqrt)  # Function-specific help

# Get docstring
print(math.sqrt.__doc__)  # "Return the square root of x."`,
      },
      {
        type: 'heading',
        content: '7. __all__ Variable',
      },
      {
        type: 'text',
        content: 'The __all__ list defines what gets imported with "from module import *".',
      },
      {
        type: 'code',
        language: 'python',
        content: `# File: mymodule.py

# Define what's publicly exported
__all__ = ['add', 'subtract', 'PI']

PI = 3.14159

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def _internal_function():
    """Not included in __all__"""
    return "Private"

# In another file:
from mymodule import *
# Only add, subtract, and PI are imported
# _internal_function is NOT imported`,
      },
      {
        type: 'heading',
        content: '8. Python Standard Library',
      },
      {
        type: 'text',
        content: 'Python comes with a rich standard library. Here are the most commonly used modules organized by category.',
      },
      {
        type: 'subheading',
        content: 'Math and Numbers',
      },
      {
        type: 'code',
        content: `# math - Mathematical functions
import math
print(math.sqrt(16))      # 4.0
print(math.ceil(4.3))     # 5
print(math.floor(4.7))    # 4
print(math.pi)            # 3.14159...
print(math.factorial(5))  # 120
print(math.gcd(48, 18))   # 6

# random - Random number generation
import random
print(random.random())           # Random float 0.0-1.0
print(random.randint(1, 10))     # Random int 1-10
print(random.choice(['a', 'b', 'c']))  # Random choice
random.shuffle([1, 2, 3, 4, 5])  # Shuffle in place
print(random.sample([1,2,3,4,5], 3))  # Random sample

# statistics - Statistical functions
from statistics import mean, median, mode, stdev
data = [1, 2, 3, 4, 5, 5]
print(mean(data))    # 3.333...
print(median(data))  # 3.5
print(mode(data))    # 5
print(stdev(data))   # 1.633...

# decimal - Decimal arithmetic
from decimal import Decimal
print(Decimal('0.1') + Decimal('0.2'))  # 0.3 (exact!)

# fractions - Rational numbers
from fractions import Fraction
print(Fraction(1, 3) + Fraction(1, 6))  # 1/2`,
      },
      {
        type: 'subheading',
        content: 'Date and Time',
      },
      {
        type: 'code',
        content: `# datetime - Date and time manipulation
from datetime import datetime, date, time, timedelta

# Current date and time
now = datetime.now()
print(now)  # 2025-01-28 14:30:00...

# Create specific datetime
dt = datetime(2025, 1, 28, 14, 30, 0)
print(dt)  # 2025-01-28 14:30:00

# Date arithmetic
tomorrow = now + timedelta(days=1)
next_week = now + timedelta(weeks=1)
one_hour_ago = now - timedelta(hours=1)

# Formatting
print(now.strftime("%Y-%m-%d"))  # 2025-01-28
print(now.strftime("%B %d, %Y"))  # January 28, 2025

# Parsing
date_str = "2025-01-28"
parsed = datetime.strptime(date_str, "%Y-%m-%d")

# time - Time access and conversions
import time
print(time.time())      # Seconds since epoch
time.sleep(1)           # Sleep for 1 second
print(time.ctime())     # Current time as string`,
      },
      {
        type: 'subheading',
        content: 'File and Directory Operations',
      },
      {
        type: 'code',
        content: `# os - Operating system interface
import os

# Directory operations
print(os.getcwd())           # Current directory
# os.chdir('/path')          # Change directory
# os.mkdir('newfolder')      # Create directory
# os.makedirs('a/b/c')       # Create nested directories
# os.rmdir('folder')         # Remove directory
# os.remove('file.txt')      # Delete file

# Path operations
print(os.path.exists('file.txt'))   # Check if exists
print(os.path.isfile('file.txt'))   # Check if file
print(os.path.isdir('folder'))      # Check if directory
print(os.path.join('dir', 'file'))  # Join paths

# Environment variables
print(os.environ.get('HOME'))       # Get env variable
# os.environ['MY_VAR'] = 'value'    # Set env variable

# pathlib - Object-oriented path operations (Python 3.4+)
from pathlib import Path

# Create path object
path = Path('folder/subfolder/file.txt')
print(path.name)       # file.txt
print(path.suffix)     # .txt
print(path.parent)     # folder/subfolder
print(path.exists())   # True/False

# glob - Find files matching pattern
import glob
txt_files = glob.glob('*.txt')      # All .txt files
py_files = glob.glob('**/*.py', recursive=True)  # All .py files recursively

# shutil - High-level file operations
import shutil
# shutil.copy('src.txt', 'dst.txt')    # Copy file
# shutil.move('src.txt', 'dst.txt')    # Move file
# shutil.rmtree('folder')              # Remove directory tree`,
      },
      {
        type: 'subheading',
        content: 'Data Serialization',
      },
      {
        type: 'code',
        content: `# json - JSON encoding and decoding
import json

# Python to JSON
data = $\{"name": "Alice", "age": 25, "active": True\}
json_string = json.dumps(data)
print(json_string)  # $\{"name": "Alice", "age": 25, "active": true\}

# Pretty print
print(json.dumps(data, indent=2))

# JSON to Python
parsed = json.loads(json_string)
print(parsed["name"])  # Alice

# Read from file
# with open('data.json', 'r') as f:
#     data = json.load(f)

# Write to file
# with open('data.json', 'w') as f:
#     json.dump(data, f)

# pickle - Python object serialization
import pickle

# Save Python object
data = $\{"users": ["Alice", "Bob"], "count": 2\}
# with open('data.pkl', 'wb') as f:
#     pickle.dump(data, f)

# Load Python object
# with open('data.pkl', 'rb') as f:
#     loaded = pickle.load(f)

# csv - CSV file reading and writing
import csv

# Write CSV
# with open('data.csv', 'w', newline='') as f:
#     writer = csv.writer(f)
#     writer.writerow(['Name', 'Age'])
#     writer.writerow(['Alice', 25])

# Read CSV
# with open('data.csv', 'r') as f:
#     reader = csv.reader(f)
#     for row in reader:
#         print(row)`,
      },
      {
        type: 'subheading',
        content: 'String and Text Processing',
      },
      {
        type: 'code',
        content: `# re - Regular expressions
import re

# Find pattern
text = "Contact: alice@email.com"
match = re.search(r'\\w+@\\w+\\.\\w+', text)
if match:
    print(match.group())  # alice@email.com

# Find all matches
emails = re.findall(r'\\w+@\\w+\\.\\w+', "alice@email.com, bob@test.com")
print(emails)  # ['alice@email.com', 'bob@test.com']

# Replace
result = re.sub(r'\\d+', 'X', "I have 3 apples and 5 oranges")
print(result)  # I have X apples and X oranges

# Split
parts = re.split(r'\\s+', "Hello   World  Python")
print(parts)  # ['Hello', 'World', 'Python']

# string - String constants
import string
print(string.ascii_lowercase)  # abcdefghijklmnopqrstuvwxyz
print(string.ascii_uppercase)  # ABCDEFGHIJKLMNOPQRSTUVWXYZ
print(string.digits)           # 0123456789
print(string.punctuation)      # !"#$%&'()*+,-./:;<=>?@[\\]^_\`$\{|\}~

# textwrap - Text wrapping and formatting
import textwrap
long_text = "This is a very long text that needs to be wrapped at 20 characters."
wrapped = textwrap.fill(long_text, width=20)
print(wrapped)`,
      },
      {
        type: 'subheading',
        content: 'System and Runtime',
      },
      {
        type: 'code',
        content: `# sys - System-specific parameters
import sys

print(sys.version)        # Python version
print(sys.platform)       # Platform (linux, win32, darwin)
print(sys.argv)           # Command line arguments
print(sys.path)           # Module search path

# Exit program
# sys.exit(0)  # Exit with code 0 (success)

# argparse - Command-line argument parsing
import argparse

parser = argparse.ArgumentParser(description='My program')
parser.add_argument('name', help='Your name')
parser.add_argument('--age', type=int, help='Your age')
# args = parser.parse_args()
# print(f"Name: $\{args.name\}, Age: $\{args.age\}")

# subprocess - Subprocess management
import subprocess

# Run command
# result = subprocess.run(['ls', '-l'], capture_output=True, text=True)
# print(result.stdout)

# platform - Access platform data
import platform
print(platform.system())   # Linux, Windows, Darwin
print(platform.python_version())  # 3.9.7`,
      },
      {
        type: 'subheading',
        content: 'Collections and Data Structures',
      },
      {
        type: 'code',
        content: `# collections - Specialized container datatypes
from collections import Counter, defaultdict, OrderedDict, namedtuple, deque

# Counter - Count occurrences
counter = Counter(['a', 'b', 'a', 'c', 'b', 'a'])
print(counter)  # Counter($\{'a': 3, 'b': 2, 'c': 1\})
print(counter.most_common(2))  # [('a', 3), ('b', 2)]

# defaultdict - Dictionary with default values
dd = defaultdict(int)
dd['count'] += 1  # No KeyError!

# OrderedDict - Maintains insertion order (less needed in Python 3.7+)
od = OrderedDict()
od['first'] = 1
od['second'] = 2

# namedtuple - Tuple with named fields
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y)  # 10 20

# deque - Double-ended queue
dq = deque([1, 2, 3])
dq.append(4)      # Add to right
dq.appendleft(0)  # Add to left
dq.pop()          # Remove from right
dq.popleft()      # Remove from left

# itertools - Iterator functions
import itertools

# count - Infinite counter
# for i in itertools.count(1):
#     if i > 5: break
#     print(i)

# cycle - Infinite cycle
# for item in itertools.cycle(['A', 'B', 'C']):
#     print(item)  # A, B, C, A, B, C, ...

# chain - Chain iterables
print(list(itertools.chain([1,2], [3,4])))  # [1, 2, 3, 4]

# combinations and permutations
print(list(itertools.combinations([1,2,3], 2)))  # [(1, 2), (1, 3), (2, 3)]
print(list(itertools.permutations([1,2,3], 2)))  # [(1, 2), (1, 3), (2, 1), ...]`,
      },
      {
        type: 'subheading',
        content: 'Internet and Web',
      },
      {
        type: 'code',
        content: `# urllib - URL handling
from urllib.request import urlopen
from urllib.parse import urlencode, urlparse

# Parse URL
url = "https://example.com/path?query=value"
parsed = urlparse(url)
print(parsed.scheme)   # https
print(parsed.netloc)   # example.com
print(parsed.path)     # /path

# URL encode
params = $\{'name': 'Alice', 'age': 25\}
encoded = urlencode(params)
print(encoded)  # name=Alice&age=25

# http.server - Simple HTTP server
# Run from command line:
# python -m http.server 8000

# webbrowser - Open browser
import webbrowser
# webbrowser.open('https://python.org')

# email - Email handling
from email.message import EmailMessage

msg = EmailMessage()
msg['Subject'] = 'Test Email'
msg['From'] = 'sender@example.com'
msg['To'] = 'receiver@example.com'
msg.set_content('Hello, this is a test email.')`,
      },
      {
        type: 'heading',
        content: '9. Packages',
      },
      {
        type: 'text',
        content: 'A package is a collection of modules organized in directories with a special __init__.py file. Packages provide namespace organization.',
      },
      {
        type: 'subheading',
        content: 'Package Structure',
      },
      {
        type: 'code',
        language: 'text',
        content: `mypackage/                 # Package directory
    __init__.py            # Makes it a package (can be empty)
    module1.py             # Module
    module2.py             # Module
    subpackage/            # Sub-package
        __init__.py        # Makes it a package
        module3.py         # Module in sub-package
        module4.py`,
      },
      {
        type: 'subheading',
        content: 'Creating a Package',
      },
      {
        type: 'code',
        language: 'python',
        content: `# File: mypackage/__init__.py
"""
MyPackage - A demonstration package.
"""

# Package-level initialization code
print("MyPackage initialized")

# Define what's available at package level
from .module1 import function1
from .module2 import function2

__all__ = ['function1', 'function2']

# Package version
__version__ = '1.0.0'`,
      },
      {
        type: 'code',
        language: 'python',
        content: `# File: mypackage/module1.py

def function1():
    return "Function from module1"

def helper1():
    return "Helper function"`,
      },
      {
        type: 'code',
        language: 'python',
        content: `# File: mypackage/module2.py

def function2():
    return "Function from module2"

class MyClass:
    pass`,
      },
      {
        type: 'subheading',
        content: 'Importing from Packages',
      },
      {
        type: 'code',
        content: `# Import entire package
import mypackage
print(mypackage.function1())  # Available from __init__.py

# Import specific module
from mypackage import module1
print(module1.function1())

# Import from module directly
from mypackage.module1 import function1
print(function1())

# Import from sub-package
from mypackage.subpackage import module3

# Dot notation
import mypackage.module1
print(mypackage.module1.function1())

import mypackage.subpackage.module3
print(mypackage.subpackage.module3.some_function())`,
      },
      {
        type: 'subheading',
        content: 'Relative Imports',
      },
      {
        type: 'code',
        language: 'python',
        content: `# Inside mypackage/module2.py

# Relative import from same package
from . import module1          # Import sibling module
from .module1 import function1 # Import from sibling

# Import from parent package
from .. import some_module     # One level up

# Import from sub-package
from .subpackage import module3

# Absolute import (preferred for clarity)
from mypackage import module1
from mypackage.module1 import function1`,
      },
      {
        type: 'subheading',
        content: '__init__.py Uses',
      },
      {
        type: 'code',
        language: 'python',
        content: `# File: mypackage/__init__.py

# 1. Make directory a package (can be empty in Python 3.3+)

# 2. Package initialization code
print("Initializing mypackage...")

# 3. Expose package-level API
from .module1 import function1
from .module2 import MyClass, function2

# 4. Define __all__ for "from package import *"
__all__ = ['function1', 'function2', 'MyClass']

# 5. Package metadata
__version__ = '1.0.0'
__author__ = 'Your Name'
__license__ = 'MIT'

# 6. Convenience imports
# Users can do: from mypackage import function1
# Instead of: from mypackage.module1 import function1`,
      },
      {
        type: 'heading',
        content: '10. Circular Imports',
      },
      {
        type: 'text',
        content: 'Circular imports occur when modules import each other. This can cause problems and should be avoided.',
      },
      {
        type: 'code',
        language: 'python',
        content: `# File: module_a.py
from module_b import function_b  # ⚠️ Circular import!

def function_a():
    return "A" + function_b()

# File: module_b.py
from module_a import function_a  # ⚠️ Circular import!

def function_b():
    return "B" + function_a()

# This causes ImportError!`,
      },
      {
        type: 'subheading',
        content: 'Solutions to Circular Imports',
      },
      {
        type: 'code',
        language: 'python',
        content: `# Solution 1: Restructure code (best)
# Move shared functionality to a third module

# File: shared.py
def shared_function():
    return "Shared"

# File: module_a.py
from shared import shared_function

# File: module_b.py
from shared import shared_function

# Solution 2: Import inside function
# File: module_a.py
def function_a():
    from module_b import function_b  # Import when needed
    return "A" + function_b()

# Solution 3: Import at end of file
# File: module_a.py
def function_a():
    return "A"

from module_b import function_b  # Import after definitions`,
      },
      {
        type: 'heading',
        content: '11. Virtual Environments',
      },
      {
        type: 'text',
        content: 'Virtual environments create isolated Python environments for different projects, preventing dependency conflicts.',
      },
      {
        type: 'subheading',
        content: 'Creating Virtual Environments',
      },
      {
        type: 'code',
        language: 'bash',
        content: `# Create virtual environment using venv (built-in)
python -m venv myenv

# Create with specific Python version
python3.9 -m venv myenv

# Create in current directory
python -m venv .venv

# Alternative: virtualenv (third-party, more features)
pip install virtualenv
virtualenv myenv`,
      },
      {
        type: 'subheading',
        content: 'Activating Virtual Environments',
      },
      {
        type: 'code',
        language: 'bash',
        content: `# Windows
myenv\\Scripts\\activate

# Mac/Linux
source myenv/bin/activate

# Fish shell (Mac/Linux)
source myenv/bin/activate.fish

# After activation, prompt shows: (myenv)

# Check active environment
which python  # Mac/Linux
where python  # Windows`,
      },
      {
        type: 'subheading',
        content: 'Working with Virtual Environments',
      },
      {
        type: 'code',
        language: 'bash',
        content: `# Install packages (only in this environment)
pip install requests
pip install pandas numpy matplotlib

# See installed packages
pip list

# See package details
pip show requests

# Deactivate environment
deactivate

# Delete environment (just delete the folder)
rm -rf myenv  # Mac/Linux
rmdir /s myenv  # Windows`,
      },
      {
        type: 'heading',
        content: '12. Package Management with pip',
      },
      {
        type: 'text',
        content: 'pip is Python\'s package installer, used to install packages from PyPI (Python Package Index).',
      },
      {
        type: 'subheading',
        content: 'Installing Packages',
      },
      {
        type: 'code',
        language: 'bash',
        content: `# Install latest version
pip install requests

# Install specific version
pip install requests==2.28.0

# Install minimum version
pip install requests>=2.28.0

# Install version range
pip install "requests>=2.28.0,<3.0.0"

# Install multiple packages
pip install requests pandas numpy

# Install from requirements file
pip install -r requirements.txt

# Install in editable mode (for development)
pip install -e .

# Install from git repository
pip install git+https://github.com/user/repo.git`,
      },
      {
        type: 'subheading',
        content: 'Managing Packages',
      },
      {
        type: 'code',
        language: 'bash',
        content: `# List installed packages
pip list

# List outdated packages
pip list --outdated

# Show package information
pip show requests

# Upgrade package
pip install --upgrade requests

# Upgrade pip itself
pip install --upgrade pip

# Uninstall package
pip uninstall requests

# Uninstall multiple packages
pip uninstall requests pandas numpy`,
      },
      {
        type: 'subheading',
        content: 'Requirements Files',
      },
      {
        type: 'code',
        language: 'bash',
        content: `# Save current environment packages
pip freeze > requirements.txt

# Contents of requirements.txt:
# requests==2.28.1
# pandas==1.5.3
# numpy==1.24.2

# Install from requirements file
pip install -r requirements.txt

# Create requirements file manually
# requirements.txt:
requests>=2.28.0
pandas
numpy==1.24.2

# Separate files for different purposes
# requirements-dev.txt (development dependencies)
-r requirements.txt
pytest
black
flake8`,
      },
      {
        type: 'subheading',
        content: 'Common pip Commands',
      },
      {
        type: 'code',
        language: 'bash',
        content: `# Search for packages (deprecated, use PyPI website)
# pip search requests

# Download package without installing
pip download requests

# Check installed packages for issues
pip check

# Show pip configuration
pip config list

# Cache management
pip cache dir     # Show cache directory
pip cache list    # List cached packages
pip cache purge   # Clear cache`,
      },
      {
        type: 'heading',
        content: '13. Creating Your Own Package',
      },
      {
        type: 'text',
        content: 'You can create and distribute your own Python packages using setup.py or pyproject.toml.',
      },
      {
        type: 'subheading',
        content: 'Package Structure',
      },
      {
        type: 'code',
        language: 'text',
        content: `myproject/
    mypackage/
        __init__.py
        module1.py
        module2.py
    tests/
        test_module1.py
    setup.py
    README.md
    LICENSE
    requirements.txt`,
      },
      {
        type: 'subheading',
        content: 'setup.py File',
      },
      {
        type: 'code',
        language: 'python',
        content: `# setup.py
from setuptools import setup, find_packages

setup(
    name='mypackage',
    version='1.0.0',
    author='Your Name',
    author_email='your.email@example.com',
    description='A short description',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url='https://github.com/yourusername/mypackage',
    packages=find_packages(),
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
    install_requires=[
        'requests>=2.28.0',
        'pandas>=1.5.0',
    ],
    entry_points=$\{
        'console_scripts': [
            'mycommand=mypackage.cli:main',
        ],
    \},
)`,
      },
      {
        type: 'subheading',
        content: 'Installing Your Package',
      },
      {
        type: 'code',
        language: 'bash',
        content: `# Install in development mode
pip install -e .

# Build distribution
python setup.py sdist bdist_wheel

# Upload to PyPI
pip install twine
twine upload dist/*

# Install from local directory
pip install /path/to/mypackage

# Install from GitHub
pip install git+https://github.com/user/mypackage.git`,
      },
      {
        type: 'heading',
        content: '14. Best Practices',
      },
      {
        type: 'text',
        content: 'Follow these best practices when working with modules and packages.',
      },
      {
        type: 'code',
        content: `# 1. Use descriptive module names
# Good: user_authentication.py, database_utils.py
# Bad: utils.py, helpers.py, stuff.py

# 2. Avoid circular imports
# Restructure code to eliminate circular dependencies

# 3. Use __all__ to define public API
__all__ = ['public_function', 'PublicClass']

# 4. Write module docstrings
"""
Module for user authentication.

This module provides functions for user login, logout,
and session management.
"""

# 5. Prefer absolute imports over relative
# Good: from mypackage.module import function
# OK: from .module import function

# 6. Don't use "from module import *"
# Bad: from math import *
# Good: from math import sqrt, pi

# 7. Group imports properly
# Standard library imports
import os
import sys

# Third-party imports
import requests
import pandas

# Local imports
from mypackage import module1

# 8. Use virtual environments
# Always create a virtual environment for each project

# 9. Pin dependencies
# Use requirements.txt with specific versions

# 10. Keep modules focused
# Each module should have a single, well-defined purpose`,
      },
      {
        type: 'note',
        content: 'Always use virtual environments for your projects to avoid dependency conflicts. Use pip freeze to save dependencies and requirements.txt for reproducibility.',
      },
      {
        type: 'note',
        content: 'The Python Standard Library is extensive and well-documented. Explore https://docs.python.org/3/library/ to discover more built-in modules before installing third-party packages.',
      },
    ],
  },

  'oop-concepts': {
    title: 'OOP Concepts',
    description: 'Master Object-Oriented Programming fundamentals with comprehensive coverage of classes, objects, attributes, methods, and special methods.',
    sections: [
      {
        type: 'heading',
        content: '1. What is OOP?',
      },
      {
        type: 'text',
        content: 'Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects rather than functions. Objects bundle data (attributes) and behaviors (methods) together, making code more modular, reusable, and maintainable.',
      },
      {
        type: 'code',
        content: `# OOP Key Concepts:
# 1. Class - Blueprint/template for creating objects
# 2. Object - Instance of a class
# 3. Attributes - Variables that belong to an object
# 4. Methods - Functions that belong to an object

# Benefits of OOP:
# - Code reusability
# - Modularity and organization
# - Data encapsulation
# - Easier maintenance
# - Real-world modeling`,
      },
      {
        type: 'heading',
        content: '2. Classes and Objects',
      },
      {
        type: 'text',
        content: 'A class is a blueprint for creating objects. An object is an instance of a class with actual values.',
      },
      {
        type: 'subheading',
        content: 'Creating a Simple Class',
      },
      {
        type: 'code',
        content: `# Define a class (blueprint)
class Dog:
    """A simple Dog class."""
    
    def bark(self):
        """Method to make the dog bark."""
        print("Woof!")
    
    def sit(self):
        """Method to make the dog sit."""
        print("Dog is sitting")

# Create objects (instances)
dog1 = Dog()
dog2 = Dog()

# Each object is independent
dog1.bark()  # Woof!
dog2.bark()  # Woof!
dog1.sit()   # Dog is sitting

# Check type and instance
print(type(dog1))  # <class '__main__.Dog'>
print(isinstance(dog1, Dog))  # True`,
      },
      {
        type: 'subheading',
        content: 'Class vs Object',
      },
      {
        type: 'code',
        content: `# Class is a blueprint
class Car:
    pass

# Objects are actual instances
car1 = Car()  # First car object
car2 = Car()  # Second car object
car3 = Car()  # Third car object

# Each object is unique
print(id(car1))  # Different memory addresses
print(id(car2))
print(id(car3))

# All are instances of Car class
print(type(car1))  # <class '__main__.Car'>`,
      },
      {
        type: 'heading',
        content: '3. The __init__ Constructor',
      },
      {
        type: 'text',
        content: 'The __init__ method is a special method (constructor) called automatically when creating an object. It initializes the object\'s attributes.',
      },
      {
        type: 'subheading',
        content: 'Basic Constructor',
      },
      {
        type: 'code',
        content: `class Person:
    def __init__(self, name, age):
        """Constructor to initialize Person object."""
        self.name = name
        self.age = age
    
    def introduce(self):
        print(f"Hi, I'm $\{self.name\} and I'm $\{self.age\} years old")

# Create person objects
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

person1.introduce()  # Hi, I'm Alice and I'm 25 years old
person2.introduce()  # Hi, I'm Bob and I'm 30 years old

# Access attributes
print(person1.name)  # Alice
print(person2.age)   # 30

# Modify attributes
person1.age = 26
print(person1.age)  # 26`,
      },
      {
        type: 'subheading',
        content: 'Constructor with Default Values',
      },
      {
        type: 'code',
        content: `class Student:
    def __init__(self, name, age, grade="A"):
        self.name = name
        self.age = age
        self.grade = grade
    
    def display(self):
        print(f"$\{self.name\}, Age: $\{self.age\}, Grade: $\{self.grade\}")

# With all arguments
student1 = Student("Alice", 20, "B")
student1.display()  # Alice, Age: 20, Grade: B

# Using default value
student2 = Student("Bob", 21)
student2.display()  # Bob, Age: 21, Grade: A`,
      },
      {
        type: 'subheading',
        content: 'Constructor without Parameters',
      },
      {
        type: 'code',
        content: `class Counter:
    def __init__(self):
        """Initialize counter to 0."""
        self.count = 0
    
    def increment(self):
        self.count += 1
    
    def get_count(self):
        return self.count

counter = Counter()
print(counter.get_count())  # 0
counter.increment()
counter.increment()
print(counter.get_count())  # 2`,
      },
      {
        type: 'heading',
        content: '4. The self Parameter',
      },
      {
        type: 'text',
        content: 'self represents the current instance of the class. It\'s used to access instance attributes and methods. self must be the first parameter in instance methods.',
      },
      {
        type: 'code',
        content: `class Car:
    def __init__(self, brand, model, year):
        # self refers to the current object being created
        self.brand = brand    # Instance attribute
        self.model = model
        self.year = year
        self.mileage = 0      # Initialize with default
    
    def display_info(self):
        # self is used to access instance attributes
        print(f"$\{self.year\} $\{self.brand\} $\{self.model\}")
        print(f"Mileage: $\{self.mileage\} miles")
    
    def drive(self, miles):
        # self accesses and modifies instance attributes
        self.mileage += miles
        print(f"Drove $\{miles\} miles")

# When calling methods, Python automatically passes self
car = Car("Toyota", "Camry", 2024)
car.display_info()  # self = car
car.drive(100)      # self = car

# This is what actually happens behind the scenes:
# Car.display_info(car)  # Explicit self
# Car.drive(car, 100)    # Explicit self`,
      },
      {
        type: 'subheading',
        content: 'Multiple Objects with self',
      },
      {
        type: 'code',
        content: `class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        # self ensures we update the correct object's balance
        self.balance += amount
        print(f"$\{self.owner\} deposited $$\{amount\}")

# Two different accounts
account1 = BankAccount("Alice", 1000)
account2 = BankAccount("Bob", 2000)

# Each has its own balance
account1.deposit(500)  # Alice deposited $500
account2.deposit(300)  # Bob deposited $300

print(account1.balance)  # 1500
print(account2.balance)  # 2300`,
      },
      {
        type: 'subheading',
        content: 'self is Not a Keyword',
      },
      {
        type: 'code',
        content: `# You can use any name, but 'self' is convention
class Example:
    def __init__(this, value):  # 'this' instead of 'self'
        this.value = value
    
    def display(this):
        print(this.value)

obj = Example(10)
obj.display()  # 10

# However, ALWAYS use 'self' - it's Python convention!`,
      },
      {
        type: 'heading',
        content: '5. Instance Variables vs Class Variables',
      },
      {
        type: 'text',
        content: 'Instance variables are unique to each object (defined with self). Class variables are shared by all instances (defined in the class body).',
      },
      {
        type: 'subheading',
        content: 'Instance Variables',
      },
      {
        type: 'code',
        content: `class Dog:
    def __init__(self, name, age):
        # Instance variables (unique to each object)
        self.name = name
        self.age = age

dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

# Each dog has different values
print(dog1.name)  # Buddy
print(dog2.name)  # Max

# Modifying one doesn't affect the other
dog1.name = "Charlie"
print(dog1.name)  # Charlie
print(dog2.name)  # Max (unchanged)`,
      },
      {
        type: 'subheading',
        content: 'Class Variables',
      },
      {
        type: 'code',
        content: `class Student:
    # Class variable (shared by ALL students)
    school_name = "ABC High School"
    total_students = 0
    
    def __init__(self, name, grade):
        # Instance variables (unique to each student)
        self.name = name
        self.grade = grade
        
        # Modify class variable
        Student.total_students += 1

# All students share the same school_name
student1 = Student("Alice", "A")
student2 = Student("Bob", "B")

print(student1.school_name)  # ABC High School
print(student2.school_name)  # ABC High School

# Change class variable for all instances
Student.school_name = "XYZ High School"
print(student1.school_name)  # XYZ High School
print(student2.school_name)  # XYZ High School

# Class variables can be accessed via class name
print(Student.total_students)  # 2`,
      },
      {
        type: 'subheading',
        content: 'Instance vs Class Variable Pitfall',
      },
      {
        type: 'code',
        content: `class Counter:
    count = 0  # Class variable
    
    def __init__(self):
        self.count = 0  # Instance variable (shadows class variable!)
    
    def increment_instance(self):
        self.count += 1  # Modifies instance variable
    
    def increment_class(self):
        Counter.count += 1  # Modifies class variable

c1 = Counter()
c2 = Counter()

c1.increment_instance()
print(c1.count)  # 1 (instance variable)
print(c2.count)  # 0 (different instance)

c1.increment_class()
c2.increment_class()
print(Counter.count)  # 2 (class variable shared by all)`,
      },
      {
        type: 'subheading',
        content: 'When to Use Each',
      },
      {
        type: 'code',
        content: `class Employee:
    # Class variables - shared by all employees
    company_name = "TechCorp"
    employee_count = 0
    
    def __init__(self, name, salary):
        # Instance variables - unique to each employee
        self.name = name
        self.salary = salary
        self.employee_id = Employee.employee_count + 1
        
        Employee.employee_count += 1

emp1 = Employee("Alice", 50000)
emp2 = Employee("Bob", 60000)

# Instance variables differ
print(emp1.name, emp1.salary)  # Alice 50000
print(emp2.name, emp2.salary)  # Bob 60000

# Class variables are same
print(emp1.company_name)  # TechCorp
print(emp2.company_name)  # TechCorp
print(Employee.employee_count)  # 2`,
      },
      {
        type: 'heading',
        content: '6. Instance Methods',
      },
      {
        type: 'text',
        content: 'Methods are functions defined inside a class that operate on the object\'s data:',
      },
      {
        type: 'code',
        content: `class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited $\{amount}. New balance: $\{self.balance}")
    
    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds!")
        else:
            self.balance -= amount
            print(f"Withdrew $\{amount}. New balance: $\{self.balance}")

account = BankAccount("Alice", 1000)
account.deposit(500)   # Deposited $500. New balance: $1500
account.withdraw(200)  # Withdrew $200. New balance: $1300`,
      },
      {
        type: 'heading',
        content: '9. Special (Magic/Dunder) Methods',
      },
      {
        type: 'text',
        content: 'Special methods (also called magic methods or dunder methods) have double underscores before and after the name. They enable operator overloading and special behavior.',
      },
      {
        type: 'subheading',
        content: '__init__ and __del__',
      },
      {
        type: 'code',
        content: `class Resource:
    def __init__(self, name):
        """Constructor - called when object is created."""
        self.name = name
        print(f"Resource $\{name\} created")
    
    def __del__(self):
        """Destructor - called when object is destroyed."""
        print(f"Resource $\{self.name\} destroyed")

# Create object
resource = Resource("DB Connection")  # Resource DB Connection created

# Delete object
del resource  # Resource DB Connection destroyed`,
      },
      {
        type: 'subheading',
        content: '__str__ and __repr__',
      },
      {
        type: 'code',
        content: `class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
    
    def __str__(self):
        """String representation for end users (print)."""
        return f"$\{self.title\} by $\{self.author\}"
    
    def __repr__(self):
        """Official representation for developers (debugging)."""
        return f"Book('$\{self.title\}', '$\{self.author\}')"

book = Book("Python Basics", "John Doe")

# __str__ is used by print()
print(book)  # Python Basics by John Doe

# __repr__ is used in interactive mode and repr()
print(repr(book))  # Book('Python Basics', 'John Doe')

# Without __str__, __repr__ is used as fallback
str(book)  # Uses __str__`,
      },
      {
        type: 'subheading',
        content: 'Comparison Methods',
      },
      {
        type: 'code',
        content: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __eq__(self, other):
        """Equal to (==)"""
        return self.age == other.age
    
    def __lt__(self, other):
        """Less than (<)"""
        return self.age < other.age
    
    def __le__(self, other):
        """Less than or equal (<=)"""
        return self.age <= other.age
    
    def __gt__(self, other):
        """Greater than (>)"""
        return self.age > other.age
    
    def __ge__(self, other):
        """Greater than or equal (>=)"""
        return self.age >= other.age
    
    def __ne__(self, other):
        """Not equal (!=)"""
        return self.age != other.age

person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

print(person1 == person2)  # False
print(person1 < person2)   # True
print(person1 > person2)   # False`,
      },
      {
        type: 'subheading',
        content: 'Arithmetic Methods',
      },
      {
        type: 'code',
        content: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        """Addition (+)"""
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        """Subtraction (-)"""
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        """Multiplication (*)"""
        return Vector(self.x * scalar, self.y * scalar)
    
    def __str__(self):
        return f"Vector($\{self.x\}, $\{self.y\})"

v1 = Vector(2, 3)
v2 = Vector(1, 4)

v3 = v1 + v2  # Calls __add__
print(v3)  # Vector(3, 7)

v4 = v1 - v2  # Calls __sub__
print(v4)  # Vector(1, -1)

v5 = v1 * 3  # Calls __mul__
print(v5)  # Vector(6, 9)`,
      },
      {
        type: 'subheading',
        content: 'Container Methods',
      },
      {
        type: 'code',
        content: `class CustomList:
    def __init__(self):
        self.items = []
    
    def __len__(self):
        """Called by len()"""
        return len(self.items)
    
    def __getitem__(self, index):
        """Called for indexing: obj[index]"""
        return self.items[index]
    
    def __setitem__(self, index, value):
        """Called for assignment: obj[index] = value"""
        self.items[index] = value
    
    def __contains__(self, item):
        """Called by 'in' operator"""
        return item in self.items
    
    def add(self, item):
        self.items.append(item)

clist = CustomList()
clist.add("apple")
clist.add("banana")

print(len(clist))  # 2 (calls __len__)
print(clist[0])    # apple (calls __getitem__)
clist[1] = "cherry"  # Calls __setitem__
print("apple" in clist)  # True (calls __contains__)`,
      },
      {
        type: 'subheading',
        content: '__call__ Method',
      },
      {
        type: 'code',
        content: `class Multiplier:
    def __init__(self, factor):
        self.factor = factor
    
    def __call__(self, x):
        """Makes object callable like a function."""
        return x * self.factor

# Create callable object
times_five = Multiplier(5)

# Call it like a function
print(times_five(10))  # 50
print(times_five(3))   # 15

# Check if callable
print(callable(times_five))  # True`,
      },
      {
        type: 'heading',
        content: '10. Property Decorators',
      },
      {
        type: 'text',
        content: 'Property decorators (@property) allow you to define methods that can be accessed like attributes, providing controlled access to private variables.',
      },
      {
        type: 'code',
        content: `class Circle:
    def __init__(self, radius):
        self._radius = radius  # Private variable
    
    @property
    def radius(self):
        """Getter method."""
        return self._radius
    
    @radius.setter
    def radius(self, value):
        """Setter method with validation."""
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        """Computed property (read-only)."""
        return 3.14159 * self._radius ** 2
    
    @property
    def diameter(self):
        """Computed property."""
        return self._radius * 2

# Use like attributes (no parentheses!)
circle = Circle(5)
print(circle.radius)  # 5 (calls getter)
print(circle.area)    # 78.53975 (computed)

# Set with validation
circle.radius = 10  # Calls setter
print(circle.diameter)  # 20

# circle.radius = -5  # ValueError: Radius cannot be negative
# circle.area = 100   # AttributeError: can't set attribute`,
      },
      {
        type: 'heading',
        content: '11. Encapsulation and Access Modifiers',
      },
      {
        type: 'text',
        content: 'Python uses naming conventions for access control: public (no prefix), protected (_prefix), and private (__prefix).',
      },
      {
        type: 'code',
        content: `class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner          # Public
        self._account_number = "123"  # Protected (convention)
        self.__balance = balance    # Private (name mangling)
    
    def deposit(self, amount):
        """Public method."""
        if amount > 0:
            self.__balance += amount
    
    def __validate(self, amount):
        """Private method."""
        return amount > 0
    
    def get_balance(self):
        """Getter for private variable."""
        return self.__balance

account = BankAccount("Alice", 1000)

# Public access
print(account.owner)  # Alice

# Protected access (by convention only)
print(account._account_number)  # 123 (works but discouraged)

# Private access (name mangled to _ClassName__attributename)
# print(account.__balance)  # AttributeError
print(account.get_balance())  # 1000 (correct way)

# Can still access via name mangling (not recommended!)
print(account._BankAccount__balance)  # 1000`,
      },
      {
        type: 'heading',
        content: '12. __slots__',
      },
      {
        type: 'text',
        content: '__slots__ restricts the attributes that can be added to an object, saving memory.',
      },
      {
        type: 'code',
        content: `# Without __slots__
class NormalClass:
    def __init__(self, x, y):
        self.x = x
        self.y = y

normal = NormalClass(1, 2)
normal.z = 3  # Can add new attributes dynamically

# With __slots__
class OptimizedClass:
    __slots__ = ['x', 'y']  # Only these attributes allowed
    
    def __init__(self, x, y):
        self.x = x
        self.y = y

optimized = OptimizedClass(1, 2)
# optimized.z = 3  # AttributeError: 'OptimizedClass' object has no attribute 'z'

# Benefits: Faster attribute access, lower memory usage`,
      },
      {
        type: 'note',
        content: 'OOP helps write cleaner, more maintainable code by organizing related data and functions together. Understanding classes, objects, methods, and special methods is essential for Python interviews and real-world projects.',
      },
    ],
  },

  'oop-principles': {
    title: 'OOP Principles',
    description: 'Master the four pillars of OOP with comprehensive coverage: Encapsulation, Inheritance, Polymorphism, and Abstraction with all methods and techniques.',
    sections: [
      {
        type: 'heading',
        content: '1. Encapsulation',
      },
      {
        type: 'text',
        content: 'Encapsulation is the bundling of data (attributes) and methods that operate on that data within a single unit (class), while restricting direct access to some components. This protects data integrity and hides implementation details.',
      },
      {
        type: 'subheading',
        content: 'Access Modifiers',
      },
      {
        type: 'code',
        content: `# Python uses naming conventions for access control
class Student:
    def __init__(self, name, age, grade):
        self.name = name              # Public - accessible everywhere
        self._age = age                # Protected - should not be accessed outside class (convention)
        self.__grade = grade           # Private - name mangling, strong privacy
    
    # Public method
    def get_info(self):
        return f"$\{self.name\}, Age: $\{self._age\}"
    
    # Protected method
    def _calculate_gpa(self):
        return self.__grade * 0.25
    
    # Private method
    def __validate_grade(self):
        return 0 <= self.__grade <= 100

student = Student("Alice", 20, 85)

# Public access
print(student.name)  # Alice

# Protected access (by convention, discouraged)
print(student._age)  # 20

# Private access (causes AttributeError)
# print(student.__grade)  # AttributeError

# Access via name mangling (not recommended!)
print(student._Student__grade)  # 85`,
      },
      {
        type: 'subheading',
        content: 'Getters and Setters',
      },
      {
        type: 'code',
        content: `class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Private attribute
    
    # Getter method
    def get_balance(self):
        """Return the current balance."""
        return self.__balance
    
    # Setter method with validation
    def set_balance(self, amount):
        """Set balance with validation."""
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        self.__balance = amount
    
    # Business methods
    def deposit(self, amount):
        """Deposit money."""
        if amount > 0:
            self.__balance += amount
            print(f"Deposited $$\{amount\}")
        else:
            print("Deposit amount must be positive")
    
    def withdraw(self, amount):
        """Withdraw money."""
        if amount > self.__balance:
            print("Insufficient funds!")
        elif amount <= 0:
            print("Withdrawal amount must be positive")
        else:
            self.__balance -= amount
            print(f"Withdrew $$\{amount\}")

account = BankAccount("Alice", 1000)
account.deposit(500)
print(account.get_balance())  # 1500

# Can't access private attribute directly
# print(account.__balance)  # AttributeError

# Must use getter
print(account.get_balance())  # 1500`,
      },
      {
        type: 'subheading',
        content: 'Property Decorators for Encapsulation',
      },
      {
        type: 'code',
        content: `class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius  # Protected variable
    
    @property
    def celsius(self):
        """Getter for celsius."""
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        """Setter with validation."""
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        """Computed property."""
        return (self._celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        """Set temperature via Fahrenheit."""
        self._celsius = (value - 32) * 5/9

temp = Temperature(25)
print(temp.celsius)     # 25
print(temp.fahrenheit)  # 77.0

# Use like attributes (calls setter with validation)
temp.celsius = 30
print(temp.celsius)     # 30

# temp.celsius = -300  # ValueError: Temperature below absolute zero!

# Set via Fahrenheit
temp.fahrenheit = 32
print(temp.celsius)     # 0.0`,
      },
      {
        type: 'subheading',
        content: 'Benefits of Encapsulation',
      },
      {
        type: 'code',
        content: `# 1. Data Protection
class User:
    def __init__(self, username, password):
        self.username = username
        self.__password = password  # Private - protected from direct access
    
    def verify_password(self, password):
        return self.__password == password
    
    def change_password(self, old_pass, new_pass):
        if self.verify_password(old_pass):
            self.__password = new_pass
            return True
        return False

# 2. Flexibility - Can change internal implementation
class ShoppingCart:
    def __init__(self):
        self.__items = []  # Could change to dict later
    
    def add_item(self, item):
        self.__items.append(item)
    
    def get_total(self):
        # Internal implementation can change without affecting users
        return sum(item['price'] for item in self.__items)

# 3. Validation
class Age:
    def __init__(self, value):
        self.__age = 0
        self.set_age(value)
    
    def set_age(self, value):
        if 0 <= value <= 150:
            self.__age = value
        else:
            raise ValueError("Invalid age")
    
    def get_age(self):
        return self.__age`,
      },
      {
        type: 'heading',
        content: '2. Inheritance',
      },
      {
        type: 'text',
        content: 'Inheritance allows a class (child/derived class) to inherit attributes and methods from another class (parent/base class). It promotes code reusability and establishes a relationship between classes.',
      },
      {
        type: 'subheading',
        content: 'Basic Inheritance',
      },
      {
        type: 'code',
        content: `# Parent/Base class
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def speak(self):
        print(f"$\{self.name\} makes a sound")
    
    def info(self):
        print(f"Name: $\{self.name\}, Species: $\{self.species\}")

# Child/Derived class inherits from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        # Call parent constructor
        super().__init__(name, "Canine")
        self.breed = breed
    
    # Override parent method
    def speak(self):
        print(f"$\{self.name\} says Woof!")
    
    # New method specific to Dog
    def fetch(self):
        print(f"$\{self.name\} is fetching!")

class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, "Feline")
        self.color = color
    
    def speak(self):
        print(f"$\{self.name\} says Meow!")
    
    def scratch(self):
        print(f"$\{self.name\} is scratching!")

# Create objects
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", "Orange")

# Inherited methods
dog.info()    # Name: Buddy, Species: Canine
cat.info()    # Name: Whiskers, Species: Feline

# Overridden methods
dog.speak()   # Buddy says Woof!
cat.speak()   # Whiskers says Meow!

# Child-specific methods
dog.fetch()   # Buddy is fetching!
cat.scratch() # Whiskers is scratching!`,
      },
      {
        type: 'subheading',
        content: 'Checking Inheritance',
      },
      {
        type: 'code',
        content: `class Animal:
    pass

class Dog(Animal):
    pass

dog = Dog()

# isinstance() - check if object is instance of class
print(isinstance(dog, Dog))     # True
print(isinstance(dog, Animal))  # True (Dog inherits from Animal)
print(isinstance(dog, object))  # True (all classes inherit from object)

# issubclass() - check if class is subclass of another
print(issubclass(Dog, Animal))   # True
print(issubclass(Dog, object))   # True
print(issubclass(Animal, Dog))   # False

# type() - get exact type
print(type(dog))  # <class '__main__.Dog'>
print(type(dog) == Dog)     # True
print(type(dog) == Animal)  # False`,
      },
      {
        type: 'heading',
        content: 'Types of Inheritance',
      },
      {
        type: 'subheading',
        content: 'Single Inheritance',
      },
      {
        type: 'code',
        content: `# One child inherits from one parent
class Vehicle:
    def __init__(self, brand):
        self.brand = brand
    
    def start(self):
        print(f"$\{self.brand\} vehicle starting...")

class Car(Vehicle):
    def __init__(self, brand, model):
        super().__init__(brand)
        self.model = model
    
    def drive(self):
        print(f"Driving $\{self.brand\} $\{self.model\}")

car = Car("Toyota", "Camry")
car.start()  # Toyota vehicle starting...
car.drive()  # Driving Toyota Camry`,
      },
      {
        type: 'subheading',
        content: 'Multiple Inheritance',
      },
      {
        type: 'code',
        content: `# Child inherits from multiple parents
class Flyer:
    def fly(self):
        print("Flying in the sky")

class Swimmer:
    def swim(self):
        print("Swimming in water")

class Duck(Flyer, Swimmer):
    def quack(self):
        print("Quack quack!")

duck = Duck()
duck.fly()    # Flying in the sky
duck.swim()   # Swimming in water
duck.quack()  # Quack quack!

# Method Resolution Order (MRO)
print(Duck.__mro__)
# (<class 'Duck'>, <class 'Flyer'>, <class 'Swimmer'>, <class 'object'>)`,
      },
      {
        type: 'subheading',
        content: 'Multilevel Inheritance',
      },
      {
        type: 'code',
        content: `# Inheritance chain: Grandparent -> Parent -> Child
class LivingBeing:
    def breathe(self):
        print("Breathing...")

class Mammal(LivingBeing):
    def feed_milk(self):
        print("Feeding milk to babies")

class Dog(Mammal):
    def bark(self):
        print("Woof!")

dog = Dog()
dog.breathe()     # Breathing... (from LivingBeing)
dog.feed_milk()   # Feeding milk to babies (from Mammal)
dog.bark()        # Woof! (from Dog)`,
      },
      {
        type: 'subheading',
        content: 'Hierarchical Inheritance',
      },
      {
        type: 'code',
        content: `# Multiple children inherit from one parent
class Shape:
    def __init__(self, color):
        self.color = color

class Circle(Shape):
    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, color, width, height):
        super().__init__(color)
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Triangle(Shape):
    def __init__(self, color, base, height):
        super().__init__(color)
        self.base = base
        self.height = height
    
    def area(self):
        return 0.5 * self.base * self.height

circle = Circle("Red", 5)
rectangle = Rectangle("Blue", 4, 6)
triangle = Triangle("Green", 3, 4)

print(circle.area())     # 78.5
print(rectangle.area())  # 24
print(triangle.area())   # 6.0`,
      },
      {
        type: 'subheading',
        content: 'Hybrid Inheritance',
      },
      {
        type: 'code',
        content: `# Combination of multiple types of inheritance
class Device:
    def __init__(self, brand):
        self.brand = brand

class Phone(Device):
    def call(self):
        print("Making a call...")

class Camera(Device):
    def take_photo(self):
        print("Taking a photo...")

class SmartPhone(Phone, Camera):
    def browse_internet(self):
        print("Browsing internet...")

smartphone = SmartPhone("Apple")
smartphone.call()            # Making a call...
smartphone.take_photo()      # Taking a photo...
smartphone.browse_internet() # Browsing internet...`,
      },
      {
        type: 'subheading',
        content: 'super() Function',
      },
      {
        type: 'code',
        content: `# super() calls methods from parent class
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
    
    def display_info(self):
        print(f"Name: $\{self.name\}")
        print(f"Salary: $$\{self.salary\}")

class Manager(Employee):
    def __init__(self, name, salary, department):
        # Call parent constructor
        super().__init__(name, salary)
        self.department = department
    
    def display_info(self):
        # Call parent method, then add more
        super().display_info()
        print(f"Department: $\{self.department\}")

manager = Manager("Alice", 80000, "IT")
manager.display_info()
# Output:
# Name: Alice
# Salary: $80000
# Department: IT`,
      },
      {
        type: 'subheading',
        content: 'Method Resolution Order (MRO)',
      },
      {
        type: 'code',
        content: `# MRO determines method lookup order in multiple inheritance
class A:
    def method(self):
        print("Method from A")

class B(A):
    def method(self):
        print("Method from B")

class C(A):
    def method(self):
        print("Method from C")

class D(B, C):
    pass

# D inherits from both B and C
d = D()
d.method()  # Method from B (B is listed first)

# Check MRO
print(D.__mro__)
# (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)

# Python uses C3 Linearization algorithm
# Order: D -> B -> C -> A -> object

class E(C, B):
    pass

e = E()
e.method()  # Method from C (C is listed first)
print(E.__mro__)
# (<class 'E'>, <class 'C'>, <class 'B'>, <class 'A'>, <class 'object'>)`,
      },
      {
        type: 'subheading',
        content: 'Method Overriding Rules',
      },
      {
        type: 'code',
        content: `class Parent:
    def greet(self):
        print("Hello from Parent")
    
    def info(self):
        print("Parent info")

class Child(Parent):
    # Override without calling parent
    def greet(self):
        print("Hello from Child")
    
    # Override and extend with super()
    def info(self):
        super().info()  # Call parent version
        print("Child info")

child = Child()
child.greet()  # Hello from Child
child.info()   # Parent info
               # Child info`,
      },
      {
        type: 'subheading',
        content: 'Diamond Problem in Multiple Inheritance',
      },
      {
        type: 'code',
        content: `# Diamond problem: D inherits from B and C, both inherit from A
class A:
    def method(self):
        print("A's method")

class B(A):
    def method(self):
        print("B's method")
        super().method()

class C(A):
    def method(self):
        print("C's method")
        super().method()

class D(B, C):
    def method(self):
        print("D's method")
        super().method()

# MRO ensures each class is called only once
d = D()
d.method()
# Output:
# D's method
# B's method
# C's method
# A's method

# MRO order prevents infinite loops
print(D.__mro__)
# (D, B, C, A, object)`,
      },
      {
        type: 'heading',
        content: '3. Polymorphism',
      },
      {
        type: 'text',
        content: 'Polymorphism means "many forms". The same method name can behave differently in different classes:',
      },
      {
        type: 'code',
        content: `class Bird:
    def move(self):
        print("Bird flies in the sky")

class Fish:
    def move(self):
        print("Fish swims in water")

class Snake:
    def move(self):
        print("Snake slithers on ground")

# Polymorphism in action
animals = [Bird(), Fish(), Snake()]

for animal in animals:
    animal.move()

# Output:
# Bird flies in the sky
# Fish swims in water
# Snake slithers on ground`,
      },
      {
        type: 'heading',
        content: 'Method Overriding',
      },
      {
        type: 'text',
        content: 'Child class can provide its own implementation of a parent\'s method:',
      },
      {
        type: 'code',
        content: `class Shape:
    def area(self):
        print("Area not defined")

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):  # Override parent method
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):  # Override parent method
        return 3.14 * self.radius ** 2

rect = Rectangle(5, 10)
circle = Circle(7)

print(rect.area())    # 50
print(circle.area())  # 153.86`,
      },
      {
        type: 'subheading',
        content: 'Method Overloading (Not Directly Supported)',
      },
      {
        type: 'code',
        content: `# Python doesn't support traditional method overloading
# Last definition wins

class Calculator:
    # This will be overwritten
    def add(self, a, b):
        return a + b
    
    # This is the only definition that exists
    def add(self, a, b, c):
        return a + b + c

calc = Calculator()
# calc.add(2, 3)  # TypeError: missing 1 required positional argument
print(calc.add(2, 3, 4))  # 9

# Solution 1: Default parameters
class BetterCalculator:
    def add(self, a, b, c=0):
        return a + b + c

calc2 = BetterCalculator()
print(calc2.add(2, 3))      # 5
print(calc2.add(2, 3, 4))   # 9

# Solution 2: *args for variable arguments
class FlexibleCalculator:
    def add(self, *args):
        return sum(args)

calc3 = FlexibleCalculator()
print(calc3.add(2, 3))         # 5
print(calc3.add(2, 3, 4))      # 9
print(calc3.add(1, 2, 3, 4, 5))  # 15`,
      },
      {
        type: 'heading',
        content: '4. Abstraction',
      },
      {
        type: 'text',
        content: 'Abstraction hides complex implementation details and shows only essential features. Use abstract classes:',
      },
      {
        type: 'code',
        content: `from abc import ABC, abstractmethod

# Abstract base class
class Vehicle(ABC):
    @abstractmethod
    def start_engine(self):
        pass
    
    @abstractmethod
    def stop_engine(self):
        pass

# Concrete class
class Car(Vehicle):
    def start_engine(self):
        print("Car engine started")
    
    def stop_engine(self):
        print("Car engine stopped")

class Motorcycle(Vehicle):
    def start_engine(self):
        print("Motorcycle engine started")
    
    def stop_engine(self):
        print("Motorcycle engine stopped")

# Can't create instance of abstract class
# vehicle = Vehicle()  # Error!

car = Car()
car.start_engine()  # Car engine started
car.stop_engine()   # Car engine stopped`,
      },
      {
        type: 'heading',
        content: 'Using super()',
      },
      {
        type: 'text',
        content: 'super() allows you to call methods from the parent class:',
      },
      {
        type: 'code',
        content: `class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
    
    def display_info(self):
        print(f"Name: {self.name}, Salary: $\{self.salary}")

class Manager(Employee):
    def __init__(self, name, salary, department):
        super().__init__(name, salary)  # Call parent constructor
        self.department = department
    
    def display_info(self):
        super().display_info()  # Call parent method
        print(f"Department: {self.department}")

manager = Manager("Alice", 80000, "IT")
manager.display_info()
# Output:
# Name: Alice, Salary: $80000
# Department: IT`,
      },
      {
        type: 'note',
        content: 'The four pillars of OOP (Encapsulation, Inheritance, Polymorphism, and Abstraction) work together to create maintainable, reusable, and scalable code. Master these concepts with practical examples for effective object-oriented design and technical interviews.',
      },
    ],
  },

  'advanced-oop': {
    title: 'Advanced OOP',
    description: 'Master advanced OOP concepts including all magic methods, descriptors, metaclasses, context managers, dataclasses, mixins, and advanced design patterns.',
    sections: [
      {
        type: 'heading',
        content: '1. Magic Methods (Dunder Methods) - Complete Reference',
      },
      {
        type: 'text',
        content: 'Magic methods (also called dunder methods) have double underscores before and after their names. They enable operator overloading and special behaviors in Python objects.',
      },
      {
        type: 'subheading',
        content: 'Object Lifecycle Methods',
      },
      {
        type: 'code',
        content: `class Resource:
    def __new__(cls, name):
        """Called BEFORE __init__ to create the object."""
        print(f"__new__ called for $\{name\}")
        instance = super().__new__(cls)
        return instance
    
    def __init__(self, name):
        """Called to initialize the object."""
        print(f"__init__ called for $\{name\}")
        self.name = name
    
    def __del__(self):
        """Called when object is about to be destroyed."""
        print(f"__del__ called for $\{self.name\}")

resource = Resource("Database")
# Output:
# __new__ called for Database
# __init__ called for Database

del resource
# Output:
# __del__ called for Database`,
      },
      {
        type: 'subheading',
        content: 'String Representation Methods',
      },
      {
        type: 'code',
        content: `class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        """User-friendly string representation (print, str())."""
        return f"$\{self.title\} by $\{self.author\}"
    
    def __repr__(self):
        """Developer-friendly representation (repr(), debugging)."""
        return f"Book('$\{self.title\}', '$\{self.author\}', $\{self.pages\})"
    
    def __format__(self, format_spec):
        """Custom formatting for f-strings."""
        if format_spec == 'short':
            return self.title
        elif format_spec == 'long':
            return f"$\{self.title\} by $\{self.author\} ($\{self.pages\} pages)"
        return str(self)

book = Book("Python Guide", "John Doe", 300)

print(book)           # Python Guide by John Doe (uses __str__)
print(repr(book))     # Book('Python Guide', 'John Doe', 300)
print(f"$\{book:short\}")  # Python Guide
print(f"$\{book:long\}")   # Python Guide by John Doe (300 pages)`,
      },
      {
        type: 'subheading',
        content: 'Comparison Magic Methods',
      },
      {
        type: 'code',
        content: `class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages
    
    def __eq__(self, other):
        """Equal to: =="""
        return self.pages == other.pages
    
    def __ne__(self, other):
        """Not equal to: !="""
        return self.pages != other.pages
    
    def __lt__(self, other):
        """Less than: <"""
        return self.pages < other.pages
    
    def __le__(self, other):
        """Less than or equal: <="""
        return self.pages <= other.pages
    
    def __gt__(self, other):
        """Greater than: >"""
        return self.pages > other.pages
    
    def __ge__(self, other):
        """Greater than or equal: >="""
        return self.pages >= other.pages

book1 = Book("Python Guide", 300)
book2 = Book("Java Basics", 250)

print(book1 == book2)  # False
print(book1 != book2)  # True
print(book1 > book2)   # True
print(book1 <= book2)  # False

# Can now sort books
books = [Book("C", 400), Book("A", 200), Book("B", 300)]
sorted_books = sorted(books)  # Sorts by pages using __lt__`,
      },
      {
        type: 'subheading',
        content: 'Arithmetic Magic Methods',
      },
      {
        type: 'code',
        content: `# Complete set of arithmetic operators
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        """Multiplication: *"""
        return Vector(self.x * scalar, self.y * scalar)
    
    def __truediv__(self, scalar):
        """Division: /"""
        return Vector(self.x / scalar, self.y / scalar)
    
    def __floordiv__(self, scalar):
        """Floor division: //"""
        return Vector(self.x // scalar, self.y // scalar)
    
    def __mod__(self, scalar):
        """Modulo: %"""
        return Vector(self.x % scalar, self.y % scalar)
    
    def __pow__(self, power):
        """Power: **"""
        return Vector(self.x ** power, self.y ** power)
    
    def __neg__(self):
        """Negation: -obj"""
        return Vector(-self.x, -self.y)
    
    def __abs__(self):
        """Absolute value: abs()"""
        return (self.x ** 2 + self.y ** 2) ** 0.5
    
    def __str__(self):
        return f"Vector($\{self.x\}, $\{self.y\})"

v1 = Vector(6, 9)
v2 = Vector(2, 3)

print(v1 + v2)    # Vector(8, 12)
print(v1 - v2)    # Vector(4, 6)
print(v1 * 2)     # Vector(12, 18)
print(v1 / 3)     # Vector(2.0, 3.0)
print(v1 // 2)    # Vector(3, 4)
print(v1 % 5)     # Vector(1, 4)
print(v2 ** 2)    # Vector(4, 9)
print(-v2)        # Vector(-2, -3)
print(abs(v2))    # 3.605... (magnitude)`,
      },
      {
        type: 'subheading',
        content: 'Reflected (Right-Side) Arithmetic Methods',
      },
      {
        type: 'code',
        content: `# For operations like: 3 * vector (instead of vector * 3)
class Number:
    def __init__(self, value):
        self.value = value
    
    def __add__(self, other):
        """Left addition: self + other"""
        print("__add__ called")
        return Number(self.value + other)
    
    def __radd__(self, other):
        """Right addition: other + self"""
        print("__radd__ called")
        return Number(other + self.value)
    
    def __mul__(self, other):
        """Left multiplication: self * other"""
        return Number(self.value * other)
    
    def __rmul__(self, other):
        """Right multiplication: other * self"""
        return Number(other * self.value)
    
    def __str__(self):
        return f"Number($\{self.value\})"

num = Number(5)

# __add__ is called
result1 = num + 10
print(result1)  # Number(15)

# __radd__ is called (when left operand doesn't support +)
result2 = 10 + num
print(result2)  # Number(15)

# Same for multiplication
print(num * 3)  # Number(15) - uses __mul__
print(3 * num)  # Number(15) - uses __rmul__`,
      },
      {
        type: 'subheading',
        content: 'In-Place Arithmetic Methods',
      },
      {
        type: 'code',
        content: `class Counter:
    def __init__(self, value):
        self.value = value
    
    def __iadd__(self, other):
        """In-place addition: +="""
        self.value += other
        return self
    
    def __isub__(self, other):
        """In-place subtraction: -="""
        self.value -= other
        return self
    
    def __imul__(self, other):
        """In-place multiplication: *="""
        self.value *= other
        return self
    
    def __str__(self):
        return f"Counter($\{self.value\})"

counter = Counter(10)
print(counter)  # Counter(10)

counter += 5    # Calls __iadd__
print(counter)  # Counter(15)

counter -= 3    # Calls __isub__
print(counter)  # Counter(12)

counter *= 2    # Calls __imul__
print(counter)  # Counter(24)`,
      },
      {
        type: 'subheading',
        content: 'Container/Sequence Magic Methods',
      },
      {
        type: 'code',
        content: `# Complete container protocol
class ShoppingCart:
    def __init__(self):
        self.items = []
    
    def __len__(self):
        return len(self.items)
    
    def __getitem__(self, index):
        return self.items[index]
    
    def __setitem__(self, index, value):
        self.items[index] = value
    
    def __contains__(self, item):
        """Membership test: in"""
        return item in self.items
    
    def __delitem__(self, index):
        """Delete item: del cart[index]"""
        del self.items[index]
    
    def __iter__(self):
        """Make object iterable: for item in cart"""
        return iter(self.items)
    
    def __reversed__(self):
        """Reverse iteration: reversed(cart)"""
        return reversed(self.items)
    
    def add(self, item):
        """Add item to cart."""
        self.items.append(item)

cart = ShoppingCart()
cart.add("Apple")
cart.add("Banana")
cart.add("Orange")

print(len(cart))           # 3
print(cart[0])             # Apple
cart[1] = "Mango"          # Change item
print("Apple" in cart)     # True

# Iterate
for item in cart:
    print(item)

# Reverse
for item in reversed(cart):
    print(item)

# Delete
del cart[0]
print(len(cart))  # 2`,
      },
      {
        type: 'subheading',
        content: 'Callable and Context Manager Methods',
      },
      {
        type: 'code',
        content: `class Multiplier:
    def __init__(self, factor):
        self.factor = factor
    
    def __call__(self, x):
        """Make object callable: obj(x)"""
        return x * self.factor

# Use like a function
times_five = Multiplier(5)
print(times_five(10))  # 50
print(times_five(3))   # 15
print(callable(times_five))  # True

# Context manager
class FileManager:
    def __init__(self, filename):
        self.filename = filename
        self.file = None
    
    def __enter__(self):
        """Called when entering 'with' block."""
        print(f"Opening $\{self.filename\}")
        self.file = open(self.filename, 'w')
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        """Called when exiting 'with' block."""
        print(f"Closing $\{self.filename\}")
        if self.file:
            self.file.close()
        return False  # Don't suppress exceptions

# Use with 'with' statement
with FileManager('test.txt') as f:
    f.write('Hello World')
# File automatically closed`,
      },
      {
        type: 'subheading',
        content: 'Attribute Access Methods',
      },
      {
        type: 'code',
        content: `class DynamicAttributes:
    def __init__(self):
        self._data = {}
    
    def __getattr__(self, name):
        """Called when attribute is not found normally."""
        print(f"__getattr__ called for '$\{name\}'")
        return self._data.get(name, f"No attribute '$\{name\}'")
    
    def __setattr__(self, name, value):
        """Called on attribute assignment."""
        if name == '_data':
            # Allow setting _data normally
            super().__setattr__(name, value)
        else:
            print(f"__setattr__ called: $\{name\} = $\{value\}")
            self._data[name] = value
    
    def __delattr__(self, name):
        """Called on attribute deletion."""
        print(f"__delattr__ called for '$\{name\}'")
        if name in self._data:
            del self._data[name]
    
    def __getattribute__(self, name):
        """Called for ALL attribute access."""
        print(f"__getattribute__ called for '$\{name\}'")
        return super().__getattribute__(name)

obj = DynamicAttributes()
obj.x = 10      # Calls __setattr__
print(obj.x)    # Calls __getattribute__ then __getattr__
del obj.x       # Calls __delattr__`,
      },
      {
        type: 'subheading',
        content: 'Hashing and Boolean Methods',
      },
      {
        type: 'code',
        content: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __hash__(self):
        """Make object hashable (for use in sets, dict keys)."""
        return hash((self.name, self.age))
    
    def __eq__(self, other):
        """Equality for hash comparison."""
        return self.name == other.name and self.age == other.age
    
    def __bool__(self):
        """Called by bool(), if, while."""
        return self.age >= 18  # True if adult

p1 = Person("Alice", 25)
p2 = Person("Alice", 25)
p3 = Person("Bob", 15)

# Can use in sets (requires __hash__ and __eq__)
people = {p1, p2}
print(len(people))  # 1 (p1 and p2 are equal)

# Boolean context
if p1:
    print("p1 is an adult")  # Prints

if not p3:
    print("p3 is a minor")   # Prints`,
      },
      {
        type: 'heading',
        content: '2. Descriptors',
      },
      {
        type: 'text',
        content: 'Descriptors are objects that define how attribute access is handled. They implement __get__, __set__, and/or __delete__ methods.',
      },
      {
        type: 'subheading',
        content: 'Basic Descriptor',
      },
      {
        type: 'code',
        content: `class Descriptor:
    def __init__(self, name):
        self.name = name
    
    def __get__(self, obj, objtype=None):
        """Called when attribute is accessed."""
        print(f"Getting $\{self.name\}")
        return obj.__dict__.get(self.name, None)
    
    def __set__(self, obj, value):
        """Called when attribute is set."""
        print(f"Setting $\{self.name\} = $\{value\}")
        obj.__dict__[self.name] = value
    
    def __delete__(self, obj):
        """Called when attribute is deleted."""
        print(f"Deleting $\{self.name\}")
        del obj.__dict__[self.name]

class Person:
    name = Descriptor('name')
    age = Descriptor('age')

p = Person()
p.name = "Alice"  # Setting name = Alice
print(p.name)     # Getting name
                  # Alice
del p.name        # Deleting name`,
      },
      {
        type: 'subheading',
        content: 'Validation Descriptor',
      },
      {
        type: 'code',
        content: `class PositiveNumber:
    def __init__(self, name):
        self.name = name
    
    def __get__(self, obj, objtype=None):
        return obj.__dict__.get(self.name, 0)
    
    def __set__(self, obj, value):
        if not isinstance(value, (int, float)):
            raise TypeError(f"$\{self.name\} must be a number")
        if value < 0:
            raise ValueError(f"$\{self.name\} must be positive")
        obj.__dict__[self.name] = value

class Product:
    price = PositiveNumber('price')
    quantity = PositiveNumber('quantity')
    
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    
    def total(self):
        return self.price * self.quantity

product = Product("Book", 29.99, 3)
print(product.total())  # 89.97

# product.price = -10  # ValueError: price must be positive
# product.price = "abc"  # TypeError: price must be a number`,
      },
      {
        type: 'subheading',
        content: 'Property as Descriptor',
      },
      {
        type: 'code',
        content: `# @property is actually a descriptor!
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        """Property getter (descriptor)."""
        return self._radius
    
    @radius.setter
    def radius(self, value):
        """Property setter (descriptor)."""
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        """Read-only property."""
        return 3.14159 * self._radius ** 2

circle = Circle(5)
print(circle.radius)  # 5
print(circle.area)    # 78.53975

circle.radius = 10
print(circle.area)    # 314.159`,
      },
      {
        type: 'heading',
        content: '3. Metaclasses',
      },
      {
        type: 'text',
        content: 'Metaclasses are "classes of classes" that define how classes behave. They control class creation.',
      },
      {
        type: 'code',
        content: `# Everything in Python is an object, including classes
class MyClass:
    pass

print(type(MyClass))  # <class 'type'>
print(type(type))     # <class 'type'>

# 'type' is a metaclass

# Creating a class dynamically with type()
DynamicClass = type('DynamicClass', (), {'x': 10, 'greet': lambda self: 'Hello'})

obj = DynamicClass()
print(obj.x)       # 10
print(obj.greet()) # Hello`,
      },
      {
        type: 'subheading',
        content: 'Custom Metaclass',
      },
      {
        type: 'code',
        content: `class UpperAttrMetaclass(type):
    """Metaclass that converts all attributes to uppercase."""
    
    def __new__(cls, name, bases, dct):
        """Called when creating a new class."""
        uppercase_dict = {}
        for attr_name, attr_value in dct.items():
            if not attr_name.startswith('__'):
                # Convert attribute names to uppercase
                uppercase_dict[attr_name.upper()] = attr_value
            else:
                uppercase_dict[attr_name] = attr_value
        
        return super().__new__(cls, name, bases, uppercase_dict)

class MyClass(metaclass=UpperAttrMetaclass):
    x = 10
    y = 20
    
    def greet(self):
        return "Hello"

obj = MyClass()
print(obj.X)       # 10 (x became X)
print(obj.Y)       # 20 (y became Y)
print(obj.GREET()) # Hello (greet became GREET)`,
      },
      {
        type: 'subheading',
        content: 'Singleton Pattern with Metaclass',
      },
      {
        type: 'code',
        content: `class Singleton(type):
    """Metaclass that creates a Singleton pattern."""
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        """Called when creating an instance."""
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=Singleton):
    def __init__(self):
        print("Initializing database connection")

# First call creates instance
db1 = Database()  # Initializing database connection

# Second call returns same instance
db2 = Database()  # (no output)

print(db1 is db2)  # True (same object)`,
      },
      {
        type: 'heading',
        content: '4. Context Managers',
      },
      {
        type: 'text',
        content: 'Context managers handle setup and teardown logic using the "with" statement.',
      },
      {
        type: 'subheading',
        content: 'Class-Based Context Manager',
      },
      {
        type: 'code',
        content: `class DatabaseConnection:
    def __init__(self, db_name):
        self.db_name = db_name
        self.connection = None
    
    def __enter__(self):
        """Setup: called when entering 'with' block."""
        print(f"Opening connection to $\{self.db_name\}")
        self.connection = f"Connection to $\{self.db_name\}"
        return self.connection
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        """Teardown: called when exiting 'with' block."""
        print(f"Closing connection to $\{self.db_name\}")
        self.connection = None
        
        # Handle exceptions
        if exc_type is not None:
            print(f"Exception occurred: $\{exc_type\.__name__\}: $\{exc_val\}")
        
        return False  # False = don't suppress exceptions

# Use context manager
with DatabaseConnection("users_db") as conn:
    print(f"Using: $\{conn\}")
    # Do database operations

# Connection automatically closed
print("Done")`,
      },
      {
        type: 'subheading',
        content: 'contextlib.contextmanager Decorator',
      },
      {
        type: 'code',
        content: `from contextlib import contextmanager

@contextmanager
def file_manager(filename, mode):
    """Context manager using generator."""
    print(f"Opening $\{filename\}")
    file = open(filename, mode)
    
    try:
        yield file  # Provide file to 'with' block
    finally:
        print(f"Closing $\{filename\}")
        file.close()

# Use generator-based context manager
with file_manager('test.txt', 'w') as f:
    f.write('Hello World')

# More examples
@contextmanager
def timer(name):
    """Time a code block."""
    import time
    start = time.time()
    print(f"Starting $\{name\}...")
    
    yield
    
    end = time.time()
    print(f"$\{name\} took $\{end - start:.2f\} seconds")

with timer("my_operation"):
    # Simulate work
    sum([i**2 for i in range(1000000)])`,
      },
      {
        type: 'heading',
        content: '5. Method Overloading',
      },
      {
        type: 'text',
        content: 'Python doesn\'t support traditional method overloading, but you can achieve similar results:',
      },
      {
        type: 'code',
        content: `class Calculator:
    def add(self, a, b=None, c=None):
        if b is None:
            return a
        elif c is None:
            return a + b
        else:
            return a + b + c

calc = Calculator()
print(calc.add(5))        # 5
print(calc.add(5, 3))     # 8
print(calc.add(5, 3, 2))  # 10

# Using *args for better approach
class BetterCalculator:
    def add(self, *args):
        return sum(args)

calc = BetterCalculator()
print(calc.add(1, 2, 3, 4, 5))  # 15`,
      },
      {
        type: 'heading',
        content: 'Property Decorators',
      },
      {
        type: 'text',
        content: 'Use @property to create getter and setter methods:',
      },
      {
        type: 'code',
        content: `class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        return (self._celsius * 9/5) + 32

temp = Temperature(25)
print(temp.celsius)      # 25
print(temp.fahrenheit)   # 77.0

temp.celsius = 30
print(temp.celsius)      # 30

# temp.celsius = -300  # Raises ValueError`,
      },
      {
        type: 'heading',
        content: 'Static and Class Methods',
      },
      {
        type: 'code',
        content: `class MathOperations:
    PI = 3.14159
    
    @staticmethod
    def add(a, b):
        # Static method - doesn't access instance or class
        return a + b
    
    @classmethod
    def circle_area(cls, radius):
        # Class method - can access class variables
        return cls.PI * radius ** 2

# Call without creating instance
print(MathOperations.add(5, 3))        # 8
print(MathOperations.circle_area(10))  # 314.159`,
      },
      {
        type: 'heading',
        content: '6. Dataclasses',
      },
      {
        type: 'text',
        content: 'Dataclasses (Python 3.7+) automatically generate special methods like __init__, __repr__, __eq__, reducing boilerplate code.',
      },
      {
        type: 'subheading',
        content: 'Basic Dataclass',
      },
      {
        type: 'code',
        content: `from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    city: str = "Unknown"  # Default value
    
    def greet(self):
        return f"Hi, I'm $\{self.name\}"

# Automatic __init__, __repr__, __eq__
person1 = Person("Alice", 25, "New York")
person2 = Person("Bob", 30)

print(person1)  # Person(name='Alice', age=25, city='New York')
print(person2)  # Person(name='Bob', age=30, city='Unknown')
print(person1 == person2)  # False
print(person1.greet())     # Hi, I'm Alice`,
      },
      {
        type: 'subheading',
        content: 'Dataclass Parameters',
      },
      {
        type: 'code',
        content: `from dataclasses import dataclass, field

@dataclass(
    init=True,       # Generate __init__
    repr=True,       # Generate __repr__
    eq=True,         # Generate __eq__
    order=True,      # Generate __lt__, __le__, __gt__, __ge__
    frozen=False     # Make instances immutable if True
)
class Product:
    name: str
    price: float
    quantity: int = 0
    
    def total(self):
        return self.price * self.quantity

p1 = Product("Book", 29.99, 3)
p2 = Product("Pen", 1.99, 10)

print(p1)  # Product(name='Book', price=29.99, quantity=3)
print(p1.total())  # 89.97

# Order comparison (because order=True)
print(p1 > p2)  # Compares by field order`,
      },
      {
        type: 'subheading',
        content: 'Field Options',
      },
      {
        type: 'code',
        content: `from dataclasses import dataclass, field
from typing import List

@dataclass
class Student:
    name: str
    age: int
    grades: List[float] = field(default_factory=list)  # Mutable default
    student_id: int = field(init=False)  # Not in __init__
    _private: str = field(default="secret", repr=False)  # Not in __repr__
    
    def __post_init__(self):
        """Called after __init__."""
        import random
        self.student_id = random.randint(1000, 9999)

student1 = Student("Alice", 20)
student1.grades.append(95.5)
student1.grades.append(88.0)

student2 = Student("Bob", 22)
student2.grades.append(92.0)

print(student1)
# Student(name='Alice', age=20, grades=[95.5, 88.0], student_id=1234)

# grades are independent (not shared)
print(student2.grades)  # [92.0]`,
      },
      {
        type: 'subheading',
        content: 'Frozen Dataclass (Immutable)',
      },
      {
        type: 'code',
        content: `from dataclasses import dataclass

@dataclass(frozen=True)
class Point:
    x: float
    y: float
    
    def distance_from_origin(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5

point = Point(3, 4)
print(point)  # Point(x=3, y=4)
print(point.distance_from_origin())  # 5.0

# Can't modify (frozen)
# point.x = 10  # FrozenInstanceError

# Can use as dict keys or in sets (hashable)
points = {point: "origin"}
print(points)`,
      },
      {
        type: 'subheading',
        content: 'Inheritance with Dataclasses',
      },
      {
        type: 'code',
        content: `from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int

@dataclass
class Employee(Person):
    employee_id: int
    department: str
    
    def display(self):
        return f"$\{self.name\} ($\{self.employee_id\}) - $\{self.department\}"

emp = Employee("Alice", 30, 12345, "IT")
print(emp)
# Employee(name='Alice', age=30, employee_id=12345, department='IT')
print(emp.display())`,
      },
      {
        type: 'heading',
        content: '7. Mixins',
      },
      {
        type: 'text',
        content: 'Mixins are classes that provide methods to other classes through multiple inheritance, promoting code reuse.',
      },
      {
        type: 'code',
        content: `# Mixin classes
class JSONMixin:
    """Add JSON serialization capability."""
    def to_json(self):
        import json
        return json.dumps(self.__dict__)

class ReprMixin:
    """Add detailed __repr__."""
    def __repr__(self):
        attrs = ', '.join(f"$\{k\}=$\{v\}" for k, v in self.__dict__.items())
        return f"$\{self.__class__.__name__\}($\{attrs\})"

class ComparableMixin:
    """Add comparison based on 'value' attribute."""
    def __eq__(self, other):
        return self.value == other.value
    
    def __lt__(self, other):
        return self.value < other.value

# Use mixins
class Product(JSONMixin, ReprMixin, ComparableMixin):
    def __init__(self, name, price):
        self.name = name
        self.price = price
        self.value = price  # For ComparableMixin

p1 = Product("Book", 29.99)
p2 = Product("Pen", 1.99)

# From JSONMixin
print(p1.to_json())  # {"name": "Book", "price": 29.99, "value": 29.99}

# From ReprMixin
print(repr(p1))  # Product(name=Book, price=29.99, value=29.99)

# From ComparableMixin
print(p1 > p2)  # True
print(sorted([p1, p2], key=lambda x: x.value))`,
      },
      {
        type: 'heading',
        content: '8. Abstract Base Classes (ABC)',
      },
      {
        type: 'text',
        content: 'ABCs define interfaces that subclasses must implement, enforcing a contract.',
      },
      {
        type: 'code',
        content: `from abc import ABC, abstractmethod
from typing import List

class DataProcessor(ABC):
    """Abstract base class for data processors."""
    
    @abstractmethod
    def load_data(self, source: str) -> List:
        """Load data from source."""
        pass
    
    @abstractmethod
    def process_data(self, data: List) -> List:
        """Process the data."""
        pass
    
    @abstractmethod
    def save_data(self, data: List, destination: str):
        """Save processed data."""
        pass
    
    def execute(self, source: str, destination: str):
        """Template method (concrete)."""
        print("Loading data...")
        data = self.load_data(source)
        
        print("Processing data...")
        processed = self.process_data(data)
        
        print("Saving data...")
        self.save_data(processed, destination)
        
        print("Done!")

class CSVProcessor(DataProcessor):
    def load_data(self, source: str) -> List:
        return [f"row{i}" for i in range(5)]
    
    def process_data(self, data: List) -> List:
        return [item.upper() for item in data]
    
    def save_data(self, data: List, destination: str):
        print(f"Saving to $\{destination\}: $\{data\}")

processor = CSVProcessor()
processor.execute("input.csv", "output.csv")`,
      },
      {
        type: 'heading',
        content: '9. Slots for Memory Optimization',
      },
      {
        type: 'text',
        content: '__slots__ restricts the attributes a class can have, reducing memory usage and improving attribute access speed.',
      },
      {
        type: 'code',
        content: `# Without __slots__
class RegularClass:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# With __slots__
class OptimizedClass:
    __slots__ = ['x', 'y']  # Only these attributes allowed
    
    def __init__(self, x, y):
        self.x = x
        self.y = y

# Regular class uses __dict__ (more memory)
reg = RegularClass(1, 2)
print(reg.__dict__)  # {'x': 1, 'y': 2}
reg.z = 3  # Can add new attributes

# Optimized class doesn't have __dict__
opt = OptimizedClass(1, 2)
# print(opt.__dict__)  # AttributeError
# opt.z = 3  # AttributeError: no attribute 'z'

# Memory comparison
import sys
print(f"Regular: $\{sys.getsizeof(reg.__dict__)\} bytes")
print(f"Optimized: No __dict__")`,
      },
      {
        type: 'heading',
        content: '10. Type Hints and Protocol',
      },
      {
        type: 'text',
        content: 'Type hints improve code documentation and enable static type checking. Protocol defines structural subtyping.',
      },
      {
        type: 'code',
        content: `from typing import Protocol, List, Optional

# Protocol (structural subtyping)
class Drawable(Protocol):
    """Any class with draw() method is Drawable."""
    def draw(self) -> None:
        ...

class Circle:
    def draw(self) -> None:
        print("Drawing circle")

class Square:
    def draw(self) -> None:
        print("Drawing square")

def render(shape: Drawable) -> None:
    """Accepts anything with draw() method."""
    shape.draw()

# Both work without explicit inheritance
render(Circle())  # Drawing circle
render(Square())  # Drawing square

# Type hints example
class Container:
    def __init__(self, items: List[int]) -> None:
        self.items: List[int] = items
    
    def get_first(self) -> Optional[int]:
        return self.items[0] if self.items else None
    
    def add(self, item: int) -> None:
        self.items.append(item)

container = Container([1, 2, 3])
first = container.get_first()  # Type checker knows it's Optional[int]`,
      },
      {
        type: 'note',
        content: 'Advanced OOP concepts like magic methods, descriptors, metaclasses, dataclasses, mixins, and ABCs are essential for writing professional Python code. Master these topics for senior-level interviews and production codebases. They enable elegant solutions, powerful abstractions, and clean architecture.',
      },
    ],
  },

  'exception-handling': {
    title: 'Exception Handling',
    description: 'Master exception handling with try-except-else-finally blocks, custom exceptions, exception hierarchy, context managers, and best practices for robust error handling.',
    sections: [
      {
        type: 'heading',
        content: '1. Understanding Exceptions',
      },
      {
        type: 'text',
        content: 'Exceptions are events that disrupt the normal flow of program execution. They represent errors or exceptional conditions. Python uses exceptions to signal errors instead of returning error codes.',
      },
      {
        type: 'subheading',
        content: 'Errors vs Exceptions',
      },
      {
        type: 'code',
        content: `# Syntax Error (detected before execution)
# print("Hello"  # SyntaxError: missing closing parenthesis

# Runtime Exception (detected during execution)
# Can be caught and handled

# Without exception handling - program crashes
def divide(a, b):
    return a / b

# result = divide(10, 0)  # ZeroDivisionError: division by zero
# Program stops here!

# With exception handling - program continues gracefully
try:
    result = divide(10, 0)
except ZeroDivisionError:
    print("Cannot divide by zero!")
    result = None

print("Program continues...")
print(f"Result: $\{result\}")  # Result: None`,
      },
      {
        type: 'subheading',
        content: 'Why Use Exception Handling?',
      },
      {
        type: 'code',
        content: `# 1. Prevent program crashes
# 2. Provide user-friendly error messages
# 3. Clean up resources (files, connections)
# 4. Separate error handling from business logic
# 5. Enable graceful degradation

def get_user_age():
    """Get user age with proper error handling."""
    try:
        age = int(input("Enter your age: "))
        
        if age < 0:
            raise ValueError("Age cannot be negative")
        if age > 150:
            raise ValueError("Age seems unrealistic")
        
        return age
    
    except ValueError as e:
        print(f"Invalid input: $\{e\}")
        return None
    
    except KeyboardInterrupt:
        print("\\nOperation cancelled by user")
        return None

# Robust, user-friendly function
age = get_user_age()
if age:
    print(f"Your age is: $\{age\}")`,
      },
      {
        type: 'heading',
        content: '2. Try-Except Block - Complete Guide',
      },
      {
        type: 'subheading',
        content: 'Basic Try-Except',
      },
      {
        type: 'code',
        content: `# Simplest form
try:
    # Code that might raise an exception
    number = int(input("Enter a number: "))
    print(f"You entered: $\{number\}")
except ValueError:
    # Handle specific exception
    print("That's not a valid number!")

# Multiple statements in try block
try:
    x = 10
    y = 0
    result = x / y  # ZeroDivisionError
    print(result)
except ZeroDivisionError:
    print("Cannot divide by zero!")
    result = float('inf')`,
      },
      {
        type: 'subheading',
        content: 'Multiple Except Blocks',
      },
      {
        type: 'code',
        content: `# Different exceptions, different handlers
def process_data(data, index):
    try:
        # Multiple possible exceptions
        value = int(data[index])
        result = 100 / value
        return result
    
    except IndexError:
        print("Index out of range!")
        return None
    
    except ValueError:
        print("Cannot convert to integer!")
        return None
    
    except ZeroDivisionError:
        print("Value is zero, cannot divide!")
        return None

# Test different scenarios
print(process_data([1, 2, 3], 10))    # IndexError
print(process_data(["abc", "2"], 0))  # ValueError
print(process_data([0, 5], 0))        # ZeroDivisionError
print(process_data([10, 5], 0))       # Success: 10.0`,
      },
      {
        type: 'subheading',
        content: 'Catching Multiple Exceptions Together',
      },
      {
        type: 'code',
        content: `# Handle multiple exceptions the same way
try:
    x = int("abc")
except (ValueError, TypeError):
    print("Invalid input type or value!")

# With exception details
try:
    data = {"name": "Alice"}
    value = int(data["age"])
except (KeyError, ValueError, TypeError) as e:
    print(f"Error processing data: $\{e\}")
    print(f"Error type: $\{type(e).__name__\}")

# More examples
def safe_operation(data, key, divisor):
    try:
        value = int(data[key])
        result = value / divisor
        return result
    except (KeyError, ValueError, TypeError, ZeroDivisionError) as e:
        print(f"Operation failed: $\{type(e).__name__\} - $\{e\}")
        return None`,
      },
      {
        type: 'subheading',
        content: 'Catching Exception Objects',
      },
      {
        type: 'code',
        content: `# Access exception details with 'as'
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error occurred: $\{e\}")
    print(f"Error type: $\{type(e).__name__\}")
    print(f"Error args: $\{e.args\}")

# Using exception object for logging
import traceback

try:
    numbers = [1, 2, 3]
    print(numbers[10])
except IndexError as e:
    print(f"IndexError caught: $\{e\}")
    print("\\nFull traceback:")
    traceback.print_exc()

# Access exception attributes
try:
    raise ValueError("Custom error message", 42)
except ValueError as e:
    print(f"Message: $\{e.args[0]\}")
    print(f"Extra data: $\{e.args[1]\}")`,
      },
      {
        type: 'subheading',
        content: 'Catch-All Exception Handler',
      },
      {
        type: 'code',
        content: `# Catch any exception (use sparingly!)
try:
    # Risky operation
    result = some_function()
except Exception as e:
    # Catches most exceptions (not BaseException)
    print(f"Unexpected error: $\{e\}")

# Better: Specific exceptions first, then general
try:
    value = int(data[key]) / divisor
except ZeroDivisionError:
    print("Cannot divide by zero")
except KeyError:
    print("Key not found")
except ValueError:
    print("Invalid value")
except Exception as e:
    # Catch anything else unexpected
    print(f"Unexpected error: $\{e\}")

# Bare except (NOT RECOMMENDED!)
try:
    result = risky_operation()
except:
    # Catches EVERYTHING including KeyboardInterrupt, SystemExit
    # Makes debugging difficult
    print("Something went wrong")`,
      },
      {
        type: 'heading',
        content: '3. Try-Except-Else',
      },
      {
        type: 'text',
        content: 'The else block executes only if NO exception occurred in the try block. It separates successful code from the try block.',
      },
      {
        type: 'subheading',
        content: 'Basic Else Usage',
      },
      {
        type: 'code',
        content: `try:
    number = int(input("Enter a number: "))
except ValueError:
    print("Invalid input!")
else:
    # Runs only if no exception occurred
    print(f"Success! You entered $\{number\}")
    result = number * 2
    print(f"Double is $\{result\}")

# Without else (less clear)
try:
    number = int(input("Enter a number: "))
    # This code runs whether or not exception happens
    # (unless exception is in int() call)
    print(f"You entered $\{number\}")
except ValueError:
    print("Invalid input!")`,
      },
      {
        type: 'subheading',
        content: 'Why Use Else?',
      },
      {
        type: 'code',
        content: `# 1. Clarity: Separate risky code from safe code
# 2. Performance: Only runs when try succeeds
# 3. Control: Exceptions in else are not caught by except

def read_config(filename):
    try:
        file = open(filename, 'r')
    except FileNotFoundError:
        print(f"Config file $\{filename\} not found")
        return None
    else:
        # Runs only if file opened successfully
        try:
            config = json.load(file)
            print("Config loaded successfully")
            return config
        finally:
            file.close()

# Example: Division with validation
def safe_divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: Cannot divide by zero")
        return None
    except TypeError:
        print("Error: Invalid types for division")
        return None
    else:
        # Only runs if division succeeded
        print(f"Division successful: $\{a\} / $\{b\} = $\{result\}")
        return result

print(safe_divide(10, 2))   # Success
print(safe_divide(10, 0))   # ZeroDivisionError
print(safe_divide(10, "a")) # TypeError`,
      },
      {
        type: 'subheading',
        content: 'Else with Multiple Exceptions',
      },
      {
        type: 'code',
        content: `def process_user_input():
    try:
        age = int(input("Enter age: "))
        year = int(input("Enter year: "))
    except ValueError:
        print("Invalid number format")
        return None
    except KeyboardInterrupt:
        print("\\nInput cancelled")
        return None
    else:
        # Runs only if both inputs succeeded
        print(f"Processing: age=$\{age\}, year=$\{year\}")
        birth_year = year - age
        return birth_year

result = process_user_input()
if result:
    print(f"Estimated birth year: $\{result\}")`,
      },
      {
        type: 'heading',
        content: '4. Try-Except-Finally',
      },
      {
        type: 'text',
        content: 'The finally block ALWAYS executes, regardless of whether an exception occurred or not. Perfect for cleanup operations like closing files, releasing locks, or closing connections.',
      },
      {
        type: 'subheading',
        content: 'Basic Finally Usage',
      },
      {
        type: 'code',
        content: `try:
    file = open("data.txt", "r")
    content = file.read()
    print(content)
except FileNotFoundError:
    print("File not found!")
finally:
    print("Cleanup: This ALWAYS runs")
    # Close file if it was opened
    try:
        file.close()
        print("File closed")
    except:
        pass

# Finally runs even without exception
try:
    print("Normal operation")
except Exception:
    print("Error occurred")
finally:
    print("Finally always runs")  # This prints`,
      },
      {
        type: 'subheading',
        content: 'Finally with Return Statements',
      },
      {
        type: 'code',
        content: `def test_finally():
    try:
        print("Try block")
        return "Returning from try"
    except:
        print("Except block")
        return "Returning from except"
    finally:
        print("Finally block executes even after return!")
        # Note: return in finally overrides other returns

result = test_finally()
print(result)
# Output:
# Try block
# Finally block executes even after return!
# Returning from try

# Finally overrides return
def test_finally_return():
    try:
        return "Try return"
    finally:
        return "Finally return"  # This wins!

print(test_finally_return())  # Finally return`,
      },
      {
        type: 'subheading',
        content: 'Resource Management with Finally',
      },
      {
        type: 'code',
        content: `# Database connection example
def query_database(query):
    connection = None
    try:
        connection = connect_to_database()
        result = connection.execute(query)
        return result
    except ConnectionError:
        print("Failed to connect to database")
        return None
    except QueryError as e:
        print(f"Query failed: $\{e\}")
        return None
    finally:
        # Always close connection
        if connection:
            connection.close()
            print("Database connection closed")

# File operations with finally
def read_file_safely(filename):
    file = None
    try:
        file = open(filename, 'r')
        data = file.read()
        # Process data...
        return data
    except FileNotFoundError:
        print(f"File $\{filename\} not found")
        return None
    except PermissionError:
        print(f"No permission to read $\{filename\}")
        return None
    finally:
        if file:
            file.close()
            print("File handle closed")`,
      },
      {
        type: 'subheading',
        content: 'Complete Try-Except-Else-Finally',
      },
      {
        type: 'code',
        content: `# All four blocks together
def process_file(filename):
    file = None
    try:
        print("1. Try: Opening file...")
        file = open(filename, 'r')
        content = file.read()
        
    except FileNotFoundError:
        print("2. Except: File not found!")
        return None
        
    except PermissionError:
        print("2. Except: Permission denied!")
        return None
        
    else:
        print("3. Else: File read successfully!")
        # Process content
        lines = content.split('\\n')
        return len(lines)
        
    finally:
        print("4. Finally: Cleanup...")
        if file:
            file.close()
            print("   File closed")

# Execution flow examples:
# Success: Try -> Else -> Finally
# FileNotFoundError: Try -> Except -> Finally
# PermissionError: Try -> Except -> Finally

result = process_file("test.txt")
print(f"Result: $\{result\}")`,
      },
      {
        type: 'subheading',
        content: 'Finally with Break/Continue',
      },
      {
        type: 'code',
        content: `# Finally runs even with break/continue
for i in range(5):
    try:
        if i == 2:
            break
        print(f"Processing $\{i\}")
    finally:
        print(f"Finally for $\{i\}")

# Output shows finally runs even with break:
# Processing 0
# Finally for 0
# Processing 1
# Finally for 1
# Finally for 2 (runs despite break!)`,
      },
      {
        type: 'heading',
        content: '5. Exception Information and Debugging',
      },
      {
        type: 'subheading',
        content: 'Accessing Exception Details',
      },
      {
        type: 'code',
        content: `try:
    result = 10 / 0
except ZeroDivisionError as e:
    # Access exception information
    print(f"Exception message: $\{e\}")
    print(f"Exception type: $\{type(e).__name__\}")
    print(f"Exception args: $\{e.args\}")
    print(f"Exception class: $\{e.__class__\}")

# More detailed example
try:
    numbers = [1, 2, 3]
    print(numbers[10])
except IndexError as e:
    print(f"Error: $\{e\}")  # list index out of range
    print(f"Type: $\{type(e)\}")  # <class 'IndexError'>
    print(f"Args: $\{e.args\}")  # ('list index out of range',)`,
      },
      {
        type: 'subheading',
        content: 'Traceback Information',
      },
      {
        type: 'code',
        content: `import traceback
import sys

def function_a():
    function_b()

def function_b():
    function_c()

def function_c():
    return 1 / 0  # Error here

try:
    function_a()
except ZeroDivisionError as e:
    print("=== Exception Details ===")
    print(f"Error: $\{e\}")
    
    print("\\n=== Traceback ===")
    traceback.print_exc()
    
    print("\\n=== Exception Info ===")
    exc_type, exc_value, exc_tb = sys.exc_info()
    print(f"Type: $\{exc_type\}")
    print(f"Value: $\{exc_value\}")
    print(f"Traceback: $\{exc_tb\}")
    
    print("\\n=== Stack Trace ===")
    tb_lines = traceback.format_tb(exc_tb)
    for line in tb_lines:
        print(line)`,
      },
      {
        type: 'subheading',
        content: 'Logging Exceptions',
      },
      {
        type: 'code',
        content: `import logging

# Configure logging
logging.basicConfig(
    level=logging.ERROR,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError as e:
        # Log the exception
        logging.error(f"Division by zero: $\{a\} / $\{b\}")
        logging.exception("Full traceback:")  # Includes traceback
        return None
    except TypeError as e:
        logging.error(f"Type error in division: $\{e\}")
        return None

# Test
divide(10, 0)
divide(10, "abc")`,
      },
      {
        type: 'heading',
        content: '6. Raising Exceptions',
      },
      {
        type: 'text',
        content: 'You can manually raise exceptions using the raise keyword. This is useful for input validation, enforcing business rules, and signaling error conditions.',
      },
      {
        type: 'subheading',
        content: 'Basic Raise',
      },
      {
        type: 'code',
        content: `# Raise built-in exceptions
def check_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative!")
    if age < 18:
        raise ValueError("Must be 18 or older")
    return True

try:
    check_age(-5)
except ValueError as e:
    print(f"Invalid age: $\{e\}")

# Raise with different exception types
def withdraw(balance, amount):
    if not isinstance(amount, (int, float)):
        raise TypeError("Amount must be a number")
    
    if amount < 0:
        raise ValueError("Amount cannot be negative")
    
    if amount > balance:
        raise RuntimeError("Insufficient funds")
    
    return balance - amount`,
      },
      {
        type: 'subheading',
        content: 'Re-raising Exceptions',
      },
      {
        type: 'code',
        content: `# Re-raise same exception
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Logging error...")
    raise  # Re-raise the caught exception

# Re-raise with modification
try:
    data = int("abc")
except ValueError as e:
    print(f"Original error: $\{e\}")
    # Re-raise same exception
    raise

# Partial handling then re-raise
def process_file(filename):
    try:
        with open(filename) as f:
            return f.read()
    except FileNotFoundError:
        print(f"File $\{filename\} not found, cleaning up...")
        # Do cleanup
        raise  # Re-raise for caller to handle`,
      },
      {
        type: 'subheading',
        content: 'Raise from (Exception Chaining)',
      },
      {
        type: 'code',
        content: `# Chain exceptions to preserve context
def load_config(filename):
    try:
        with open(filename) as f:
            import json
            return json.load(f)
    except FileNotFoundError as e:
        # Raise new exception from original
        raise RuntimeError(f"Config file $\{filename\} missing") from e
    except json.JSONDecodeError as e:
        raise RuntimeError(f"Invalid JSON in $\{filename\}") from e

try:
    config = load_config("config.json")
except RuntimeError as e:
    print(f"Error: $\{e\}")
    print(f"Caused by: $\{e.__cause__\}")

# Suppress original exception
def parse_data(data):
    try:
        return int(data)
    except ValueError as e:
        # Hide original exception
        raise TypeError("Data must be numeric") from None

try:
    parse_data("abc")
except TypeError as e:
    print(e)
    print(e.__cause__)  # None`,
      },
      {
        type: 'subheading',
        content: 'Raise with Custom Messages',
      },
      {
        type: 'code',
        content: `# Raise with detailed messages
def validate_email(email):
    if '@' not in email:
        raise ValueError(
            f"Invalid email '$\{email\}': missing @ symbol"
        )
    
    if '.' not in email.split('@')[1]:
        raise ValueError(
            f"Invalid email '$\{email\}': domain needs a dot"
        )
    
    return True

# Raise with multiple arguments
def create_user(username, age):
    if len(username) < 3:
        raise ValueError(
            "Username too short",
            username,
            len(username)
        )
    
    if age < 13:
        raise ValueError(
            "User too young",
            username,
            age
        )

try:
    create_user("ab", 10)
except ValueError as e:
    print(f"Error: $\{e.args[0]\}")
    print(f"Username: $\{e.args[1]\}")
    print(f"Value: $\{e.args[2]\}")`,
      },
      {
        type: 'subheading',
        content: 'Conditional Raising',
      },
      {
        type: 'code',
        content: `# Raise based on conditions
def process_payment(amount, balance):
    if amount <= 0:
        raise ValueError("Amount must be positive")
    
    if balance < amount:
        raise RuntimeError(
            f"Insufficient funds: need $\{amount\}, have $\{balance\}"
        )
    
    # Process payment
    return balance - amount

# Assert (raises AssertionError)
def calculate_average(numbers):
    assert len(numbers) > 0, "Cannot calculate average of empty list"
    assert all(isinstance(n, (int, float)) for n in numbers), "All items must be numbers"
    
    return sum(numbers) / len(numbers)

# Note: Assertions can be disabled with -O flag
# Use explicit raise for critical checks`,
      },
      {
        type: 'heading',
        content: '7. Custom Exceptions',
      },
      {
        type: 'text',
        content: 'Create your own exception classes to represent specific error conditions in your application. Custom exceptions improve code clarity and enable targeted error handling.',
      },
      {
        type: 'subheading',
        content: 'Basic Custom Exception',
      },
      {
        type: 'code',
        content: `class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        self.message = f"Insufficient funds: Balance $\{balance}, tried to withdraw $\{amount}"
        super().__init__(self.message)

class BankAccount:
    def __init__(self, balance):
        self.balance = balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError(self.balance, amount)
        self.balance -= amount
        return self.balance

account = BankAccount(100)
try:
    account.withdraw(150)
except InsufficientFundsError as e:
    print(e.message)
    # Output: Insufficient funds: Balance $100, tried to withdraw $150`,
      },
      {
        type: 'subheading',
        content: 'Exception Hierarchy',
      },
      {
        type: 'code',
        content: `# Create exception hierarchy
class ValidationError(Exception):
    """Base validation error."""
    pass

class EmailError(ValidationError):
    pass

class PasswordError(ValidationError):
    pass

def validate_user(email, password):
    if '@' not in email:
        raise EmailError("Email must contain @")
    if len(password) < 8:
        raise PasswordError("Password too short")

try:
    validate_user("invalid", "short")
except EmailError as e:
    print(f"Email error: $\{e\}")
except ValidationError as e:
    # Catches any ValidationError subclass
    print(f"Validation error: $\{e\}")`,
      },
      {
        type: 'heading',
        content: '8. Common Built-in Exceptions',
      },
      {
        type: 'text',
        content: 'Python provides many built-in exception types for common error conditions.',
      },
      {
        type: 'code',
        content: `# ValueError - Invalid value
try:
    int("abc")  # Can't convert to int
except ValueError as e:
    print(f"ValueError: $\{e\}")

# TypeError - Wrong type
try:
    "2" + 2  # Can't add str and int
except TypeError as e:
    print(f"TypeError: $\{e\}")

# IndexError - Index out of range
try:
    lst = [1, 2, 3]
    print(lst[10])
except IndexError as e:
    print(f"IndexError: $\{e\}")

# KeyError - Dict key not found
try:
    d = {"name": "Alice"}
    print(d["age"])
except KeyError as e:
    print(f"KeyError: $\{e\}")

# FileNotFoundError - File doesn't exist
try:
    open("nonexistent.txt")
except FileNotFoundError as e:
    print(f"FileNotFoundError: $\{e\}")

# ZeroDivisionError - Division by zero
try:
    10 / 0
except ZeroDivisionError as e:
    print(f"ZeroDivisionError: $\{e\}")

# AttributeError - Invalid attribute
try:
    x = 5
    x.append(3)  # int has no append
except AttributeError as e:
    print(f"AttributeError: $\{e\}")

# ImportError/ModuleNotFoundError - Import failed
try:
    import nonexistent_module
except ModuleNotFoundError as e:
    print(f"ModuleNotFoundError: $\{e\}")`,
      },
      {
        type: 'subheading',
        content: 'More Built-in Exceptions',
      },
      {
        type: 'code',
        content: `# RuntimeError - General runtime error
raise RuntimeError("Something went wrong")

# NotImplementedError - Method not implemented
class Base:
    def method(self):
        raise NotImplementedError("Subclass must implement")

# StopIteration - Iterator exhausted
iterator = iter([1, 2])
next(iterator)  # 1
next(iterator)  # 2
# next(iterator)  # StopIteration

# NameError - Variable not defined
try:
    print(undefined_variable)
except NameError as e:
    print(f"NameError: $\{e\}")

# OSError - Operating system error
# PermissionError - No permission (subclass of OSError)
# FileExistsError - File already exists (subclass of OSError)

# MemoryError - Out of memory
# RecursionError - Maximum recursion depth exceeded
# AssertionError - Assert statement failed`,
      },
      {
        type: 'heading',
        content: '9. Exception Hierarchy',
      },
      {
        type: 'text',
        content: 'Understanding the exception hierarchy helps you catch exceptions appropriately. Always catch specific exceptions before general ones.',
      },
      {
        type: 'code',
        content: `# Exception hierarchy (simplified)
# BaseException
#   ├─ SystemExit
#   ├─ KeyboardInterrupt
#   ├─ GeneratorExit
#   └─ Exception
#       ├─ StopIteration
#       ├─ ArithmeticError
#       │   ├─ ZeroDivisionError
#       │   ├─ FloatingPointError
#       │   └─ OverflowError
#       ├─ AssertionError
#       ├─ AttributeError
#       ├─ EOFError
#       ├─ ImportError
#       │   └─ ModuleNotFoundError
#       ├─ LookupError
#       │   ├─ IndexError
#       │   └─ KeyError
#       ├─ NameError
#       ├─ OSError
#       │   ├─ FileNotFoundError
#       │   ├─ PermissionError
#       │   └─ FileExistsError
#       ├─ RuntimeError
#       │   ├─ NotImplementedError
#       │   └─ RecursionError
#       ├─ TypeError
#       ├─ ValueError
#       └─ Warning
#           └─ (various warning types)

# Why hierarchy matters
try:
    # Some operation
    pass
except IndexError:
    # Specific handler
    print("Index error")
except LookupError:
    # More general (catches IndexError and KeyError)
    print("Lookup error")
except Exception:
    # Most general (catches almost everything)
    print("General exception")`,
      },
      {
        type: 'subheading',
        content: 'Exception Catching Order',
      },
      {
        type: 'code',
        content: `# CORRECT: Specific to general
try:
    result = int("abc")
except ValueError:
    print("Specific: Value error")
except Exception:
    print("General: Any exception")

# WRONG: General before specific
try:
    result = int("abc")
except Exception:
    print("This catches everything!")
except ValueError:  # This will NEVER run!
    print("Never reached")

# Multiple specific exceptions
try:
    # Risky operation
    pass
except (ValueError, TypeError):
    print("Value or type error")
except (IndexError, KeyError):
    print("Lookup error")
except Exception:
    print("Other error")`,
      },
      {
        type: 'heading',
        content: '10. Context Managers for Exception Safety',
      },
      {
        type: 'text',
        content: 'Context managers (with statement) ensure cleanup code runs even if exceptions occur.',
      },
      {
        type: 'code',
        content: `# Without context manager (risky)
file = open("data.txt", "w")
try:
    file.write("Hello")
    # If exception here, file might not close!
    risky_operation()
finally:
    file.close()

# With context manager (safe)
with open("data.txt", "w") as file:
    file.write("Hello")
    risky_operation()
# File automatically closed, even if exception

# Multiple context managers
with open("input.txt") as infile, open("output.txt", "w") as outfile:
    data = infile.read()
    outfile.write(data.upper())
# Both files automatically closed`,
      },
      {
        type: 'subheading',
        content: 'Custom Context Manager',
      },
      {
        type: 'code',
        content: `from contextlib import contextmanager

@contextmanager
def error_handler(operation_name):
    """Context manager for consistent error handling."""
    print(f"Starting $\{operation_name\}...")
    try:
        yield
    except Exception as e:
        print(f"Error in $\{operation_name\}: $\{e\}")
        raise
    else:
        print(f"$\{operation_name\} completed successfully")
    finally:
        print(f"Cleanup for $\{operation_name\}")

# Usage
with error_handler("data processing"):
    # Your code here
    process_data()`,
      },
      {
        type: 'heading',
        content: '11. Best Practices',
      },
      {
        type: 'code',
        content: `# 1. Catch specific exceptions
try:
    value = int(data)
except ValueError:  # Specific
    handle_invalid_data()

# 2. Don't catch everything
# BAD
try:
    something()
except:  # Catches KeyboardInterrupt, SystemExit, etc.
    pass

# GOOD
try:
    something()
except Exception as e:  # Doesn't catch system exceptions
    handle_error(e)

# 3. Use finally for cleanup
try:
    resource = acquire_resource()
    use_resource(resource)
finally:
    release_resource(resource)

# 4. Don't hide exceptions
# BAD
try:
    something()
except Exception:
    pass  # Error silently ignored!

# GOOD
try:
    something()
except Exception as e:
    logger.error(f"Error: $\{e\}")
    # Handle appropriately

# 5. Raise exceptions early
def divide(a, b):
    if b == 0:
        raise ValueError("Divisor cannot be zero")
    return a / b

# 6. Use custom exceptions for domain logic
class InvalidOrderError(Exception):
    pass

if not order.is_valid():
    raise InvalidOrderError("Order validation failed")`,
      },
      {
        type: 'note',
        content: 'Exception handling is critical for building robust applications. Master try-except-else-finally blocks, understand the exception hierarchy, create meaningful custom exceptions, and always catch specific exceptions. Use context managers for resource safety. These practices are essential for production code and technical interviews.',
      },
    ],
  },

  'file-handling': {
    title: 'File Handling',
    description: 'Master comprehensive file handling including text, binary, CSV, JSON, and XML files. Learn file modes, buffering, encodings, path operations, and advanced techniques for production-ready file I/O.',
    sections: [
      {
        type: 'heading',
        content: '1. File Basics and Open Function',
      },
      {
        type: 'text',
        content: 'The open() function is the gateway to file operations in Python. It returns a file object that provides methods for reading, writing, and manipulating files.',
      },
      {
        type: 'subheading',
        content: 'Basic File Opening',
      },
      {
        type: 'code',
        content: `# Basic syntax: open(filename, mode, encoding)
file = open("example.txt", "r")  # r = read mode (default)
content = file.read()
file.close()  # MUST close manually!

# open() returns a file object
print(type(file))  # <class '_io.TextIOWrapper'>

# File object attributes
print(file.name)    # 'example.txt'
print(file.mode)    # 'r'
print(file.closed)  # True (after closing)`,
      },
      {
        type: 'subheading',
        content: 'File Modes - Complete Reference',
      },
      {
        type: 'code',
        content: `# TEXT MODES (default)
# 'r'  - Read only (file must exist)
# 'w'  - Write only (creates new, overwrites existing)
# 'a'  - Append only (creates new, adds to end of existing)
# 'r+' - Read and write (file must exist)
# 'w+' - Read and write (creates new, overwrites existing)
# 'a+' - Read and append (creates new, adds to end)
# 'x'  - Exclusive creation (fails if file exists)

# BINARY MODES (add 'b' to any text mode)
# 'rb'  - Read binary
# 'wb'  - Write binary
# 'ab'  - Append binary
# 'rb+' - Read and write binary
# 'wb+' - Read and write binary (overwrites)
# 'ab+' - Read and append binary
# 'xb'  - Exclusive creation binary

# Examples
with open("data.txt", "r") as f:     # Read text
    content = f.read()

with open("output.txt", "w") as f:   # Write text (overwrites)
    f.write("Hello")

with open("log.txt", "a") as f:      # Append text
    f.write("New entry\\n")

with open("image.jpg", "rb") as f:   # Read binary
    data = f.read()

with open("copy.jpg", "wb") as f:    # Write binary
    f.write(data)`,
      },
      {
        type: 'subheading',
        content: 'File Opening with Encoding',
      },
      {
        type: 'code',
        content: `# Specify encoding for text files
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()

# Common encodings:
# 'utf-8'      - Universal (recommended)
# 'ascii'      - English only
# 'latin-1'    - Western European
# 'cp1252'     - Windows Western European
# 'utf-16'     - Unicode 16-bit
# 'iso-8859-1' - Latin-1

# Read file with different encoding
with open("legacy.txt", "r", encoding="latin-1") as f:
    content = f.read()

# Handle encoding errors
with open("data.txt", "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# errors parameter options:
# 'strict'  - Raise exception (default)
# 'ignore'  - Skip problematic characters
# 'replace' - Replace with ?
# 'backslashreplace' - Replace with \\xNN`,
      },
      {
        type: 'heading',
        content: '2. Context Managers (with Statement)',
      },
      {
        type: 'text',
        content: 'The with statement is the best practice for file handling. It automatically closes files, even if exceptions occur, preventing resource leaks.',
      },
      {
        type: 'subheading',
        content: 'Why Use With Statement',
      },
      {
        type: 'code',
        content: `# WITHOUT with - manual cleanup required
file = open("data.txt", "r")
try:
    content = file.read()
    # If error occurs here, file might not close!
finally:
    file.close()

# WITH with - automatic cleanup
with open("data.txt", "r") as file:
    content = file.read()
    # File automatically closed, even if exception
# File is guaranteed closed here

# Multiple files
with open("input.txt", "r") as infile, open("output.txt", "w") as outfile:
    data = infile.read()
    outfile.write(data.upper())
# Both files automatically closed`,
      },
      {
        type: 'subheading',
        content: 'How With Statement Works',
      },
      {
        type: 'code',
        content: `# with calls __enter__ and __exit__ methods
class FileHandler:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        """Called when entering with block."""
        print(f"Opening $\{self.filename\}")
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        """Called when exiting with block."""
        print(f"Closing $\{self.filename\}")
        if self.file:
            self.file.close()
        return False  # Don't suppress exceptions

# Usage
with FileHandler("test.txt", "w") as f:
    f.write("Hello")
# Automatically calls __exit__`,
      },
      {
        type: 'heading',
        content: '3. Reading Files - Complete Methods',
      },
      {
        type: 'subheading',
        content: 'read() - Read Entire File',
      },
      {
        type: 'code',
        content: `# Read entire file as single string
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
    print(f"Total characters: $\{len(content)\}")

# Read specific number of characters
with open("data.txt", "r") as file:
    first_10 = file.read(10)  # Read first 10 characters
    next_5 = file.read(5)     # Read next 5 characters
    print(first_10)
    print(next_5)

# Read all remaining
with open("data.txt", "r") as file:
    part1 = file.read(100)     # Read first 100 chars
    rest = file.read()         # Read everything else
    print(f"Part 1: $\{len(part1)\} chars")
    print(f"Rest: $\{len(rest)\} chars")`,
      },
      {
        type: 'subheading',
        content: 'readline() - Read Single Line',
      },
      {
        type: 'code',
        content: `# Read one line at a time
with open("data.txt", "r") as file:
    line1 = file.readline()  # Reads first line (includes \\n)
    line2 = file.readline()  # Reads second line
    line3 = file.readline()  # Reads third line
    
    print(repr(line1))  # Shows \\n
    print(line1.strip())  # Remove \\n

# Read lines in loop
with open("data.txt", "r") as file:
    while True:
        line = file.readline()
        if not line:  # Empty string = end of file
            break
        print(line.strip())

# Read specific number of lines
with open("data.txt", "r") as file:
    for i in range(5):  # Read first 5 lines
        line = file.readline()
        if line:
            print(f"Line $\{i+1\}: $\{line.strip()\}")`,
      },
      {
        type: 'subheading',
        content: 'readlines() - Read All Lines as List',
      },
      {
        type: 'code',
        content: `# Read all lines into list
with open("data.txt", "r") as file:
    lines = file.readlines()  # Returns list of strings
    print(f"Total lines: $\{len(lines)\}")
    
    for i, line in enumerate(lines, 1):
        print(f"$\{i\}: $\{line.strip()\}")

# Memory consideration: readlines() loads entire file
# For large files, use iteration instead

# Process lines
with open("data.txt", "r") as file:
    lines = file.readlines()
    # Remove empty lines
    lines = [line.strip() for line in lines if line.strip()]
    # Process each line
    for line in lines:
        process(line)`,
      },
      {
        type: 'subheading',
        content: 'Iterating Over File (Best Practice)',
      },
      {
        type: 'code',
        content: `# BEST: Iterate directly over file object (memory efficient)
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())

# Advantages:
# 1. Memory efficient (reads one line at a time)
# 2. Clean and Pythonic
# 3. Works with huge files

# With line numbers
with open("data.txt", "r") as file:
    for line_num, line in enumerate(file, 1):
        print(f"$\{line_num\}: $\{line.strip()\}")

# Filter while reading
with open("data.txt", "r") as file:
    for line in file:
        if "ERROR" in line:
            print(line.strip())

# Process in chunks
with open("large_file.txt", "r") as file:
    while True:
        lines = [file.readline() for _ in range(100)]
        if not lines[0]:  # End of file
            break
        process_batch(lines)`,
      },
      {
        type: 'subheading',
        content: 'Reading Binary Files',
      },
      {
        type: 'code',
        content: `# Read entire binary file
with open("image.jpg", "rb") as file:
    data = file.read()
    print(f"File size: $\{len(data)\} bytes")
    print(f"First 10 bytes: $\{data[:10]\}")

# Read binary in chunks (for large files)
with open("video.mp4", "rb") as file:
    chunk_size = 1024 * 1024  # 1 MB chunks
    while True:
        chunk = file.read(chunk_size)
        if not chunk:
            break
        process_chunk(chunk)

# Copy binary file
with open("source.jpg", "rb") as src, open("dest.jpg", "wb") as dst:
    dst.write(src.read())`,
      },
      {
        type: 'subheading',
        content: 'File Position and Seek',
      },
      {
        type: 'code',
        content: `# tell() - Get current position
with open("data.txt", "r") as file:
    print(file.tell())  # 0 (start)
    
    file.read(10)
    print(file.tell())  # 10 (after reading 10 chars)
    
    file.read(5)
    print(file.tell())  # 15

# seek() - Move to specific position
with open("data.txt", "r") as file:
    file.seek(10)  # Move to position 10
    content = file.read()  # Read from position 10
    
    file.seek(0)   # Move back to start
    first = file.read(5)

# seek() with offset
with open("data.txt", "r") as file:
    # seek(offset, whence)
    # whence: 0=start, 1=current, 2=end
    
    file.seek(0, 0)  # Start of file
    file.seek(10, 1) # 10 bytes forward from current
    file.seek(-5, 2) # 5 bytes before end (binary mode only)

# Rewind file
with open("data.txt", "r") as file:
    first_read = file.read()
    file.seek(0)  # Rewind
    second_read = file.read()  # Read again`,
      },
      {
        type: 'heading',
        content: '4. Writing Files - Complete Methods',
      },
      {
        type: 'subheading',
        content: 'write() - Write String to File',
      },
      {
        type: 'code',
        content: `# Write to file (overwrites existing)
with open("output.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("This is a new line\\n")
    # Returns number of characters written
    chars_written = file.write("Third line\\n")
    print(f"Wrote $\{chars_written\} characters")

# write() doesn't add newlines automatically
with open("output.txt", "w") as file:
    file.write("Line 1")
    file.write("Line 2")  # Appears on same line!
    # Output: Line 1Line 2

# Proper way with newlines
with open("output.txt", "w") as file:
    file.write("Line 1\\n")
    file.write("Line 2\\n")
    # Output: Line 1 (newline) Line 2

# Write variables
name = "Alice"
age = 25
with open("user.txt", "w") as file:
    file.write(f"Name: $\{name\}\\n")
    file.write(f"Age: $\{age\}\\n")`,
      },
      {
        type: 'subheading',
        content: 'writelines() - Write List of Strings',
      },
      {
        type: 'code',
        content: `# Write multiple lines (no newlines added!)
lines = ["Line 1", "Line 2", "Line 3"]
with open("output.txt", "w") as file:
    file.writelines(lines)
    # Output: Line 1Line 2Line 3 (no newlines!)

# Correct way: add newlines to list items
lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
with open("output.txt", "w") as file:
    file.writelines(lines)
    # Output: Line 1 (newline) Line 2 (newline) Line 3

# Using list comprehension
lines = ["Line 1", "Line 2", "Line 3"]
with open("output.txt", "w") as file:
    file.writelines(line + "\\n" for line in lines)

# Write from various sources
data = ["Alice", "Bob", "Charlie"]
with open("names.txt", "w") as file:
    file.writelines(f"$\{name\}\\n" for name in data)`,
      },
      {
        type: 'subheading',
        content: 'Append Mode',
      },
      {
        type: 'code',
        content: `# Append to existing file (doesn't overwrite)
with open("log.txt", "a") as file:
    file.write("New log entry\\n")
    file.write("Another entry\\n")

# Create if doesn't exist, append if exists
with open("log.txt", "a") as file:
    import datetime
    timestamp = datetime.datetime.now()
    file.write(f"[$\{timestamp\}] Log message\\n")

# Append vs Write comparison
# First write (creates file)
with open("data.txt", "w") as f:
    f.write("First line\\n")

# Append (adds to file)
with open("data.txt", "a") as f:
    f.write("Second line\\n")

# Write (overwrites entire file!)
with open("data.txt", "w") as f:
    f.write("This overwrites everything\\n")`,
      },
      {
        type: 'subheading',
        content: 'Writing Binary Files',
      },
      {
        type: 'code',
        content: `# Write binary data
data = b"\\x89PNG\\r\\n\\x1a\\n"  # PNG header
with open("test.png", "wb") as file:
    file.write(data)

# Copy binary file
with open("source.jpg", "rb") as src:
    with open("dest.jpg", "wb") as dst:
        dst.write(src.read())

# Write binary in chunks (memory efficient)
with open("source.mp4", "rb") as src:
    with open("dest.mp4", "wb") as dst:
        chunk_size = 8192  # 8 KB chunks
        while True:
            chunk = src.read(chunk_size)
            if not chunk:
                break
            dst.write(chunk)

# Convert string to bytes and write
text = "Hello, World!"
with open("data.bin", "wb") as file:
    file.write(text.encode("utf-8"))`,
      },
      {
        type: 'subheading',
        content: 'Read and Write (r+, w+, a+ modes)',
      },
      {
        type: 'code',
        content: `# r+ mode: Read and write (file must exist)
with open("data.txt", "r+") as file:
    content = file.read()         # Read existing
    file.write("\\nNew line")      # Append at end
    
    file.seek(0)                  # Go to start
    first = file.read(10)         # Read first 10 chars

# w+ mode: Read and write (overwrites file)
with open("data.txt", "w+") as file:
    file.write("Hello\\n")
    file.write("World\\n")
    
    file.seek(0)  # Must seek to start to read
    content = file.read()
    print(content)

# a+ mode: Read and append
with open("log.txt", "a+") as file:
    file.write("New entry\\n")
    
    file.seek(0)  # Go to start to read
    all_content = file.read()
    print(all_content)`,
      },
      {
        type: 'subheading',
        content: 'Buffering and Flushing',
      },
      {
        type: 'code',
        content: `# Buffer controls how often data is written to disk
# buffering=-1 : System default
# buffering=0  : Unbuffered (binary only)
# buffering=1  : Line buffered (text files)
# buffering>1  : Buffer size in bytes

# Unbuffered write (immediate)
with open("output.txt", "w", buffering=1) as file:
    file.write("This is written immediately\\n")

# Manual flush
with open("output.txt", "w") as file:
    file.write("Line 1\\n")
    file.flush()  # Force write to disk
    # Do something else...
    file.write("Line 2\\n")

# Use case: real-time logging
import time
with open("log.txt", "w", buffering=1) as log:
    for i in range(5):
        log.write(f"Entry $\{i\}\\n")
        log.flush()  # Ensure written immediately
        time.sleep(1)`,
      },
      {
        type: 'heading',
        content: '5. Working with CSV Files',
      },
      {
        type: 'text',
        content: 'CSV (Comma Separated Values) files are commonly used for tabular data. Python\'s csv module provides powerful tools for reading and writing CSV files.',
      },
      {
        type: 'subheading',
        content: 'Writing CSV Files',
      },
      {
        type: 'code',
        content: `import csv

# Basic CSV writing
data = [
    ["Name", "Age", "City"],
    ["Alice", 25, "New York"],
    ["Bob", 30, "Paris"],
    ["Charlie", 35, "London"]
]

with open("people.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)  # Write all rows at once

# Write one row at a time
with open("people.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["Name", "Age", "City"])  # Header
    writer.writerow(["Alice", 25, "New York"])
    writer.writerow(["Bob", 30, "Paris"])

# Custom delimiter
with open("data.tsv", "w", newline="") as file:
    writer = csv.writer(file, delimiter="\\t")  # Tab-separated
    writer.writerow(["Col1", "Col2", "Col3"])

# Custom quote character
with open("data.csv", "w", newline="") as file:
    writer = csv.writer(file, quotechar="'", quoting=csv.QUOTE_MINIMAL)
    writer.writerow(["Name", "Description"])
    writer.writerow(["Alice", "Says 'hello' to everyone"])`,
      },
      {
        type: 'subheading',
        content: 'Reading CSV Files',
      },
      {
        type: 'code',
        content: `import csv

# Basic CSV reading
with open("people.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)  # Each row is a list

# Skip header
with open("people.csv", "r") as file:
    reader = csv.reader(file)
    next(reader)  # Skip first row (header)
    for row in reader:
        name, age, city = row
        print(f"$\{name\} is $\{age\} years old")

# Read into list
with open("people.csv", "r") as file:
    reader = csv.reader(file)
    data = list(reader)  # Convert to list
    print(f"Total rows: $\{len(data)\}")

# Custom delimiter
with open("data.tsv", "r") as file:
    reader = csv.reader(file, delimiter="\\t")
    for row in reader:
        print(row)`,
      },
      {
        type: 'subheading',
        content: 'CSV DictReader and DictWriter',
      },
      {
        type: 'code',
        content: `import csv

# DictReader - Read as dictionaries
with open("people.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        # Each row is a dictionary
        print(f"$\{row['Name']\} is $\{row['Age']\} years old")
        print(f"Lives in $\{row['City']\}")

# DictReader with custom fieldnames
with open("data.csv", "r") as file:
    reader = csv.DictReader(file, fieldnames=["col1", "col2", "col3"])
    for row in reader:
        print(row["col1"])

# DictWriter - Write from dictionaries
fieldnames = ["Name", "Age", "City"]
data = [
    {"Name": "Alice", "Age": 25, "City": "New York"},
    {"Name": "Bob", "Age": 30, "City": "Paris"},
    {"Name": "Charlie", "Age": 35, "City": "London"}
]

with open("people.csv", "w", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()  # Write header row
    writer.writerows(data)  # Write all data

# Write one row at a time
with open("people.csv", "w", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=["Name", "Age"])
    writer.writeheader()
    writer.writerow({"Name": "Alice", "Age": 25})
    writer.writerow({"Name": "Bob", "Age": 30})`,
      },
      {
        type: 'subheading',
        content: 'Advanced CSV Options',
      },
      {
        type: 'code',
        content: `import csv

# Excel dialect (for Excel compatibility)
with open("data.csv", "w", newline="") as file:
    writer = csv.writer(file, dialect="excel")
    writer.writerow(["Data1", "Data2"])

# Custom dialect
csv.register_dialect("custom",
    delimiter="|",
    quotechar='"',
    quoting=csv.QUOTE_MINIMAL,
    lineterminator="\\n"
)

with open("data.csv", "w", newline="") as file:
    writer = csv.writer(file, dialect="custom")
    writer.writerow(["A", "B", "C"])

# Handle missing fields
with open("incomplete.csv", "r") as file:
    reader = csv.DictReader(file, restkey="extra", restval="N/A")
    for row in reader:
        print(row)

# Quoting options
# csv.QUOTE_MINIMAL - Quote only when needed
# csv.QUOTE_ALL - Quote all fields
# csv.QUOTE_NONNUMERIC - Quote non-numeric fields
# csv.QUOTE_NONE - Never quote

with open("data.csv", "w", newline="") as file:
    writer = csv.writer(file, quoting=csv.QUOTE_ALL)
    writer.writerow(["Text", 123, "More text"])`,
      },
      {
        type: 'heading',
        content: '6. Working with JSON Files',
      },
      {
        type: 'text',
        content: 'JSON (JavaScript Object Notation) is a lightweight data format perfect for configuration files, APIs, and data exchange. Python\'s json module makes it easy to work with JSON data.',
      },
      {
        type: 'subheading',
        content: 'Writing JSON Files',
      },
      {
        type: 'code',
        content: `import json

# Basic JSON writing
data = {
    "name": "Alice",
    "age": 25,
    "city": "New York",
    "hobbies": ["reading", "coding", "gaming"]
}

with open("data.json", "w") as file:
    json.dump(data, file, indent=4)  # indent for pretty printing

# Without indentation (compact)
with open("compact.json", "w") as file:
    json.dump(data, file)

# Complex data structure
users = [
    {
        "id": 1,
        "name": "Alice",
        "email": "alice@example.com",
        "active": True,
        "balance": 1234.56,
        "tags": ["vip", "premium"]
    },
    {
        "id": 2,
        "name": "Bob",
        "email": "bob@example.com",
        "active": False,
        "balance": None,
        "tags": []
    }
]

with open("users.json", "w") as file:
    json.dump(users, file, indent=2)`,
      },
      {
        type: 'subheading',
        content: 'Reading JSON Files',
      },
      {
        type: 'code',
        content: `import json

# Basic JSON reading
with open("data.json", "r") as file:
    data = json.load(file)
    print(data["name"])      # Alice
    print(data["hobbies"])   # ['reading', 'coding', 'gaming']
    print(type(data))        # <class 'dict'>

# Reading JSON array
with open("users.json", "r") as file:
    users = json.load(file)  # Returns list
    for user in users:
        print(f"$\{user['name']\}: $\{user['email']\}")

# Access nested data
config = {
    "database": {
        "host": "localhost",
        "port": 5432,
        "credentials": {
            "username": "admin",
            "password": "secret"
        }
    }
}

with open("config.json", "w") as f:
    json.dump(config, f, indent=2)

with open("config.json", "r") as f:
    cfg = json.load(f)
    print(cfg["database"]["host"])
    print(cfg["database"]["credentials"]["username"])`,
      },
      {
        type: 'subheading',
        content: 'JSON Strings (dumps/loads)',
      },
      {
        type: 'code',
        content: `import json

# Convert Python object to JSON string
data = {"name": "Alice", "age": 25}
json_string = json.dumps(data, indent=2)
print(json_string)
print(type(json_string))  # <class 'str'>

# Convert JSON string to Python object
json_str = '{"name": "Bob", "age": 30}'
data = json.loads(json_str)
print(data["name"])  # Bob
print(type(data))    # <class 'dict'>

# Pretty print JSON
data = {"users": [{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]}
pretty = json.dumps(data, indent=4, sort_keys=True)
print(pretty)

# Compact JSON (no spaces)
compact = json.dumps(data, separators=(",", ":"))
print(compact)  # {"users":[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]}`,
      },
      {
        type: 'subheading',
        content: 'Advanced JSON Options',
      },
      {
        type: 'code',
        content: `import json

# sort_keys - Sort dictionary keys
data = {"z": 1, "a": 2, "m": 3}
sorted_json = json.dumps(data, sort_keys=True)
print(sorted_json)  # {"a": 2, "m": 3, "z": 1}

# ensure_ascii - Handle non-ASCII characters
data = {"name": "Åsa", "city": "São Paulo"}
with open("unicode.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Custom encoder for unsupported types
from datetime import datetime

class DateTimeEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        return super().default(obj)

data = {
    "event": "Meeting",
    "timestamp": datetime.now()
}

json_str = json.dumps(data, cls=DateTimeEncoder)
print(json_str)

# Handle JSON decode errors
try:
    data = json.loads("invalid json")
except json.JSONDecodeError as e:
    print(f"JSON error: $\{e.msg\} at line $\{e.lineno\} column $\{e.colno\}")`,
      },
      {
        type: 'subheading',
        content: 'JSON with Custom Objects',
      },
      {
        type: 'code',
        content: `import json

class User:
    def __init__(self, name, age, email):
        self.name = name
        self.age = age
        self.email = email
    
    def to_dict(self):
        """Convert to dictionary for JSON serialization."""
        return {
            "name": self.name,
            "age": self.age,
            "email": self.email
        }
    
    @classmethod
    def from_dict(cls, data):
        """Create User from dictionary."""
        return cls(data["name"], data["age"], data["email"])

# Serialize custom object
user = User("Alice", 25, "alice@example.com")
user_dict = user.to_dict()

with open("user.json", "w") as f:
    json.dump(user_dict, f, indent=2)

# Deserialize to custom object
with open("user.json", "r") as f:
    data = json.load(f)
    user = User.from_dict(data)
    print(f"$\{user.name\}, $\{user.age\}, $\{user.email\}")`,
      },
      {
        type: 'heading',
        content: '7. File Operations with os Module',
      },
      {
        type: 'subheading',
        content: 'File Existence and Information',
      },
      {
        type: 'code',
        content: `import os

# Check if file exists
if os.path.exists("data.txt"):
    print("File exists")

# Check if path is a file
if os.path.isfile("data.txt"):
    print("It's a file")

# Check if path is a directory
if os.path.isdir("my_folder"):
    print("It's a directory")

# Get file size
size = os.path.getsize("data.txt")
print(f"File size: $\{size\} bytes")
print(f"File size: $\{size / 1024:.2f\} KB")
print(f"File size: $\{size / (1024*1024):.2f\} MB")

# Get file metadata
import os.path
stat = os.stat("data.txt")
print(f"Size: $\{stat.st_size\} bytes")
print(f"Created: $\{stat.st_ctime\}")
print(f"Modified: $\{stat.st_mtime\}")
print(f"Accessed: $\{stat.st_atime\}")`,
      },
      {
        type: 'subheading',
        content: 'File Operations',
      },
      {
        type: 'code',
        content: `import os

# Delete file
if os.path.exists("temp.txt"):
    os.remove("temp.txt")
    print("File deleted")

# Safe delete with error handling
try:
    os.remove("file.txt")
except FileNotFoundError:
    print("File doesn't exist")
except PermissionError:
    print("No permission to delete")

# Rename file
os.rename("old_name.txt", "new_name.txt")

# Move file (rename with different directory)
os.rename("file.txt", "backup/file.txt")

# Copy file (need shutil module)
import shutil
shutil.copy("source.txt", "destination.txt")
shutil.copy2("source.txt", "dest.txt")  # Preserve metadata

# Copy entire directory
shutil.copytree("source_folder", "dest_folder")

# Move file or directory
shutil.move("source.txt", "destination.txt")`,
      },
      {
        type: 'subheading',
        content: 'Directory Operations',
      },
      {
        type: 'code',
        content: `import os

# Get current directory
current = os.getcwd()
print(f"Current directory: $\{current\}")

# Change directory
os.chdir("/path/to/directory")

# Create directory
os.mkdir("new_folder")

# Create nested directories
os.makedirs("parent/child/grandchild", exist_ok=True)
# exist_ok=True prevents error if exists

# Remove empty directory
os.rmdir("empty_folder")

# Remove directory and contents
import shutil
shutil.rmtree("folder_with_contents")

# List files and folders
items = os.listdir(".")
print(items)

# List only files
files = [f for f in os.listdir(".") if os.path.isfile(f)]

# List only directories
dirs = [d for d in os.listdir(".") if os.path.isdir(d)]

# Walk directory tree
for root, dirs, files in os.walk("."):
    print(f"Directory: $\{root\}")
    print(f"  Subdirectories: $\{dirs\}")
    print(f"  Files: $\{files\}")`,
      },
      {
        type: 'heading',
        content: '8. Path Manipulation with os.path and pathlib',
      },
      {
        type: 'subheading',
        content: 'os.path Module',
      },
      {
        type: 'code',
        content: `import os

# Get current directory
current = os.getcwd()
print(current)

# Join paths (cross-platform)
path = os.path.join("folder", "subfolder", "file.txt")
print(path)  # folder/subfolder/file.txt (or folder\\subfolder\\file.txt on Windows)

# Split path into directory and filename
directory, filename = os.path.split("/path/to/file.txt")
print(f"Directory: $\{directory\}")  # /path/to
print(f"Filename: $\{filename\}")    # file.txt

# Split filename and extension
name, ext = os.path.splitext("document.pdf")
print(f"Name: $\{name\}")  # document
print(f"Extension: $\{ext\}")  # .pdf

# Get absolute path
abs_path = os.path.abspath("data.txt")
print(abs_path)

# Get directory name
dirname = os.path.dirname("/path/to/file.txt")
print(dirname)  # /path/to

# Get filename
basename = os.path.basename("/path/to/file.txt")
print(basename)  # file.txt

# Check if path is absolute
print(os.path.isabs("/absolute/path"))  # True
print(os.path.isabs("relative/path"))   # False

# Normalize path (resolve .. and .)
normalized = os.path.normpath("/path/to/../file.txt")
print(normalized)  # /path/file.txt

# Get common prefix
common = os.path.commonpath(["/usr/local/bin", "/usr/local/lib"])
print(common)  # /usr/local`,
      },
      {
        type: 'subheading',
        content: 'pathlib Module (Modern Approach)',
      },
      {
        type: 'code',
        content: `from pathlib import Path

# Create Path object
path = Path("folder/file.txt")
print(path)
print(type(path))  # <class 'pathlib.PosixPath'> or WindowsPath

# Current directory
current = Path.cwd()
print(current)

# Home directory
home = Path.home()
print(home)

# Join paths with /
path = Path("folder") / "subfolder" / "file.txt"
print(path)

# File properties
path = Path("data.txt")
print(path.name)       # data.txt
print(path.stem)       # data
print(path.suffix)     # .txt
print(path.parent)     # . (parent directory)
print(path.absolute()) # Absolute path

# Multiple suffixes
path = Path("archive.tar.gz")
print(path.suffixes)  # ['.tar', '.gz']

# Check existence
if path.exists():
    print("Path exists")

if path.is_file():
    print("It's a file")

if path.is_dir():
    print("It's a directory")

# Read/write with pathlib
path = Path("data.txt")
content = path.read_text()  # Read entire file
path.write_text("New content")  # Write to file

# Binary read/write
data = path.read_bytes()
path.write_bytes(b"Binary data")`,
      },
      {
        type: 'subheading',
        content: 'pathlib Advanced Operations',
      },
      {
        type: 'code',
        content: `from pathlib import Path

# List directory contents
path = Path(".")
for item in path.iterdir():
    print(item)

# Glob patterns
# Find all .txt files
for txt_file in path.glob("*.txt"):
    print(txt_file)

# Find all .py files recursively
for py_file in path.rglob("*.py"):
    print(py_file)

# Find files matching pattern
for file in path.glob("**/*.json"):
    print(file)

# Create directory
new_dir = Path("new_folder")
new_dir.mkdir(exist_ok=True)

# Create nested directories
nested = Path("parent/child/grandchild")
nested.mkdir(parents=True, exist_ok=True)

# Delete file
file = Path("temp.txt")
file.unlink(missing_ok=True)  # Don't error if doesn't exist

# Delete directory
directory = Path("empty_folder")
directory.rmdir()  # Only works if empty

# Rename/move
old = Path("old_name.txt")
new = old.rename("new_name.txt")

# File metadata
path = Path("data.txt")
stat = path.stat()
print(f"Size: $\{stat.st_size\} bytes")
print(f"Modified: $\{stat.st_mtime\}")

# Resolve path (absolute, resolve symlinks)
resolved = path.resolve()
print(resolved)`,
      },
      {
        type: 'subheading',
        content: 'Path Comparison',
      },
      {
        type: 'code',
        content: `from pathlib import Path
import os

# os.path vs pathlib comparison

# OLD WAY (os.path)
import os
path = os.path.join("folder", "file.txt")
if os.path.exists(path):
    size = os.path.getsize(path)
    with open(path, "r") as f:
        content = f.read()

# NEW WAY (pathlib)
from pathlib import Path
path = Path("folder") / "file.txt"
if path.exists():
    size = path.stat().st_size
    content = path.read_text()

# Benefits of pathlib:
# 1. Object-oriented
# 2. More intuitive
# 3. Cross-platform
# 4. Built-in methods for common operations
# 5. Path arithmetic with /`,
      },
      {
        type: 'note',
        content: 'File handling is critical for data processing. Always use context managers (with statement), specify encodings, handle exceptions properly, and choose appropriate file formats. For large files, use generators and chunked reading. Master both os.path and pathlib for modern path operations.',
      },
    ],
  },

  'multithreading': {
    title: 'Multithreading',
    description: 'Master concurrent execution with threads, thread synchronization, locks, semaphores, events, queues, thread pools, and understanding the GIL for CPU-bound vs I/O-bound tasks.',
    sections: [
      {
        type: 'heading',
        content: '1. Introduction to Threading',
      },
      {
        type: 'text',
        content: 'Threading allows multiple operations to run concurrently within a single process. Threads share the same memory space, making them lightweight but requiring careful synchronization. Best for I/O-bound tasks.',
      },
      {
        type: 'subheading',
        content: 'What is a Thread?',
      },
      {
        type: 'code',
        content: `import threading
import time

def print_numbers():
    for i in range(5):
        print(f"Number: $\{i\}")
        time.sleep(0.5)

def print_letters():
    for letter in 'ABCDE':
        print(f"Letter: $\{letter\}")
        time.sleep(0.5)

# Create threads
thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_letters)

# Start threads
thread1.start()
thread2.start()

# Wait for completion
thread1.join()
thread2.join()

print("Both threads completed!")`,
      },
      {
        type: 'note',
        content: 'Threading is best for I/O-bound tasks. For CPU-bound tasks, use multiprocessing to bypass the GIL. Always use synchronization primitives when sharing data between threads.',
      },
    ],
  },

  'multiprocessing': {
    title: 'Multiprocessing',
    description: 'Master parallel processing with multiple processes, process pools, inter-process communication using pipes, queues, shared memory, and process synchronization for CPU-intensive tasks.',
    sections: [
      {
        type: 'heading',
        content: '1. Introduction to Multiprocessing',
      },
      {
        type: 'text',
        content: 'Multiprocessing creates separate Python processes, each with its own Python interpreter and memory space. Unlike threading, multiprocessing bypasses the GIL, enabling true parallel execution on multiple CPU cores. Best for CPU-bound tasks.',
      },
      {
        type: 'subheading',
        content: 'Basic Process Creation',
      },
      {
        type: 'code',
        content: `import multiprocessing
import os
import time

def worker(name):
    print(f"$\{name\} starting (PID: $\{os.getpid()\})")
    time.sleep(2)
    print(f"$\{name\} finished")

if __name__ == '__main__':
    # Create process
    process = multiprocessing.Process(target=worker, args=("Process-1",))
    
    # Start process
    process.start()
    
    print(f"Main process (PID: $\{os.getpid()\})")
    
    # Wait for completion
    process.join()
    
    print("Process completed")`,
      },
      {
        type: 'note',
        content: 'Multiprocessing is essential for CPU-intensive tasks. Use Process for manual control, Pool for batch processing, and ProcessPoolExecutor for modern API. Always use if __name__ == "__main__" guard to prevent infinite process creation.',
      },
    ],
  },

  'regex': {
    title: 'Regular Expressions',
    description: 'Learn pattern matching and text processing using Python\'s powerful re module.',
    sections: [
      {
        type: 'heading',
        content: 'What are Regular Expressions?',
      },
      {
        type: 'text',
        content: 'Regular expressions (regex) are patterns used to match, search, and manipulate text. They\'re powerful for validation, searching, and text processing.',
      },
      {
        type: 'heading',
        content: 'Basic Patterns',
      },
      {
        type: 'code',
        content: `import re

# Literal match
text = "Hello World"
match = re.search("World", text)
if match:
    print("Found!")  # Found!

# Special characters
# . - Any character (except newline)
# ^ - Start of string
# $ - End of string
# * - 0 or more repetitions
# + - 1 or more repetitions
# ? - 0 or 1 repetition
# [] - Character set
# | - OR operator`,
      },
      {
        type: 'heading',
        content: 'Common Methods',
      },
      {
        type: 'code',
        content: `import re

text = "My phone number is 123-456-7890"

# search() - finds first match
match = re.search(r"\\d{3}-\\d{3}-\\d{4}", text)
if match:
    print(match.group())  # 123-456-7890

# findall() - finds all matches
email_text = "Contact: john@email.com or jane@email.com"
emails = re.findall(r"\\w+@\\w+\\.com", email_text)
print(emails)  # ['john@email.com', 'jane@email.com']

# match() - matches from the beginning
result = re.match(r"My", text)
print(result.group())  # My

# split() - split by pattern
words = re.split(r"\\s+", "Hello   World  Python")
print(words)  # ['Hello', 'World', 'Python']

# sub() - replace matches
new_text = re.sub(r"\\d", "X", "Call 123-456-7890")
print(new_text)  # Call XXX-XXX-XXXX`,
      },
      {
        type: 'heading',
        content: 'Character Classes',
      },
      {
        type: 'code',
        content: `import re

# Predefined character classes
# \\d - Digit [0-9]
# \\D - Not a digit
# \\w - Word character [a-zA-Z0-9_]
# \\W - Not a word character
# \\s - Whitespace
# \\S - Not whitespace

text = "User123 logged in at 10:30 AM"

# Find digits
digits = re.findall(r"\\d+", text)
print(digits)  # ['123', '10', '30']

# Find words
words = re.findall(r"\\w+", text)
print(words)  # ['User123', 'logged', 'in', 'at', '10', '30', 'AM']

# Custom character class
vowels = re.findall(r"[aeiou]", "Hello World")
print(vowels)  # ['e', 'o', 'o']

# Range
lowercase = re.findall(r"[a-z]+", "Hello123World")
print(lowercase)  # ['ello', 'orld']`,
      },
      {
        type: 'heading',
        content: 'Quantifiers',
      },
      {
        type: 'code',
        content: `import re

# * - 0 or more
print(re.findall(r"ab*", "a ab abb abbb"))
# ['a', 'ab', 'abb', 'abbb']

# + - 1 or more
print(re.findall(r"ab+", "a ab abb abbb"))
# ['ab', 'abb', 'abbb']

# ? - 0 or 1
print(re.findall(r"ab?", "a ab abb"))
# ['a', 'ab', 'ab']

# {n} - exactly n times
print(re.findall(r"\\d{3}", "123 45 6789"))
# ['123', '678']

# {n,m} - between n and m times
print(re.findall(r"\\d{2,4}", "1 12 123 1234 12345"))
# ['12', '123', '1234', '1234']`,
      },
      {
        type: 'heading',
        content: 'Groups and Capturing',
      },
      {
        type: 'code',
        content: `import re

# Capturing groups with ()
text = "John: 25, Jane: 30, Bob: 35"
pattern = r"(\\w+): (\\d+)"
matches = re.findall(pattern, text)
print(matches)  # [('John', '25'), ('Jane', '30'), ('Bob', '35')]

# Named groups
pattern = r"(?P<name>\\w+): (?P<age>\\d+)"
match = re.search(pattern, text)
if match:
    print(match.group("name"))  # John
    print(match.group("age"))   # 25

# Non-capturing group (?:...)
pattern = r"(?:Mr|Ms|Dr)\\. (\\w+)"
match = re.search(pattern, "Dr. Smith")
print(match.group(1))  # Smith`,
      },
      {
        type: 'heading',
        content: 'Common Patterns',
      },
      {
        type: 'code',
        content: `import re

# Email validation
email_pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
email = "user@example.com"
if re.match(email_pattern, email):
    print("Valid email")

# Phone number (US format)
phone_pattern = r"^\\d{3}-\\d{3}-\\d{4}$"
phone = "123-456-7890"
if re.match(phone_pattern, phone):
    print("Valid phone")

# URL
url_pattern = r"https?://[\\w\\.-]+"
urls = re.findall(url_pattern, "Visit https://example.com or http://test.com")
print(urls)

# Password strength (8+ chars, letter, number, special char)
password_pattern = r"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
password = "Secure123!"
if re.match(password_pattern, password):
    print("Strong password")

# Extract hashtags
text = "Learning #Python and #RegEx is fun!"
hashtags = re.findall(r"#\\w+", text)
print(hashtags)  # ['#Python', '#RegEx']`,
      },
      {
        type: 'heading',
        content: 'Flags',
      },
      {
        type: 'code',
        content: `import re

text = "Hello World\\nhello python"

# re.IGNORECASE - case-insensitive
matches = re.findall(r"hello", text, re.IGNORECASE)
print(matches)  # ['Hello', 'hello']

# re.MULTILINE - ^ and $ match each line
pattern = r"^hello"
matches = re.findall(pattern, text, re.MULTILINE | re.IGNORECASE)
print(matches)  # ['Hello', 'hello']

# re.DOTALL - . matches newlines too
pattern = r"Hello.*python"
match = re.search(pattern, text, re.DOTALL)
if match:
    print("Matched across lines")`,
      },
      {
        type: 'note',
        content: 'Use raw strings (r"pattern") for regex patterns to avoid issues with backslashes. Regular expressions are powerful but can be complex - start simple and build up.',
      },
    ],
  },

  'memory-management': {
    title: 'Memory Management',
    description: 'Understand how Python manages memory, including the stack, heap, garbage collection, and mutability.',
    sections: [
      {
        type: 'heading',
        content: 'Stack vs Heap',
      },
      {
        type: 'text',
        content: 'Python uses two main memory areas:',
      },
      {
        type: 'list',
        content: [
          'Stack - Stores function calls, local variables, and references. Fast but limited size.',
          'Heap - Stores objects and data structures. Larger but slower to access.',
        ],
      },
      {
        type: 'code',
        content: `# Stack stores references, heap stores actual objects
x = 10        # x (reference) on stack, 10 (object) on heap
y = [1, 2, 3] # y (reference) on stack, list on heap

def my_function():
    local_var = 5  # Created on stack
    return local_var * 2
# local_var is removed from stack after function returns`,
      },
      {
        type: 'heading',
        content: 'Reference Counting',
      },
      {
        type: 'text',
        content: 'Python tracks how many references point to each object:',
      },
      {
        type: 'code',
        content: `import sys

x = [1, 2, 3]
print(sys.getrefcount(x))  # 2 (x + temporary reference)

y = x  # Another reference to the same list
print(sys.getrefcount(x))  # 3

del y  # Remove one reference
print(sys.getrefcount(x))  # 2

# When reference count reaches 0, object is deleted`,
      },
      {
        type: 'heading',
        content: 'Garbage Collection',
      },
      {
        type: 'text',
        content: 'Python automatically cleans up unused objects. The garbage collector handles circular references:',
      },
      {
        type: 'code',
        content: `import gc

# Circular reference
class Node:
    def __init__(self):
        self.ref = None

a = Node()
b = Node()
a.ref = b  # a references b
b.ref = a  # b references a (circular!)

# Even if we delete a and b, they still reference each other
# Garbage collector detects and cleans this

# Manual garbage collection
gc.collect()  # Force garbage collection

# Check garbage collector stats
print(gc.get_count())  # Objects in each generation

# Disable/enable garbage collection
gc.disable()
gc.enable()`,
      },
      {
        type: 'heading',
        content: 'Mutable vs Immutable Objects',
      },
      {
        type: 'text',
        content: 'Understanding mutability is crucial for memory management:',
      },
      {
        type: 'code',
        content: `# IMMUTABLE - Cannot be changed after creation
# int, float, str, tuple, frozenset

x = 10
print(id(x))  # Memory address
x = 20
print(id(x))  # Different memory address - new object created!

text = "Hello"
print(id(text))
text = text + " World"
print(id(text))  # Different address - strings are immutable

# MUTABLE - Can be changed in place
# list, dict, set

nums = [1, 2, 3]
print(id(nums))
nums.append(4)  # Modified in place
print(id(nums))  # Same memory address!

# Implications
a = [1, 2, 3]
b = a  # b references the same list as a
b.append(4)
print(a)  # [1, 2, 3, 4] - a is also modified!

# To create a copy:
c = a.copy()  # or a[:]
c.append(5)
print(a)  # [1, 2, 3, 4] - a is not modified
print(c)  # [1, 2, 3, 4, 5]`,
      },
      {
        type: 'heading',
        content: 'Object Identity and Equality',
      },
      {
        type: 'code',
        content: `# id() - returns memory address
# is - checks if same object (identity)
# == - checks if equal value (equality)

a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)   # True (same values)
print(a is b)   # False (different objects)
print(a is c)   # True (same object)

print(id(a))
print(id(b))    # Different
print(id(c))    # Same as a

# Small integers are cached
x = 256
y = 256
print(x is y)   # True (same object - Python caches small ints)

x = 257
y = 257
print(x is y)   # False (different objects)

# String interning
s1 = "hello"
s2 = "hello"
print(s1 is s2)  # True (Python interns short strings)`,
      },
      {
        type: 'heading',
        content: 'Memory Optimization Tips',
      },
      {
        type: 'list',
        content: [
          'Use generators for large datasets instead of lists',
          'Delete large objects when no longer needed',
          'Use __slots__ in classes to reduce memory',
          'Avoid creating unnecessary copies of data',
          'Use tuple instead of list for fixed data',
          'Clear large collections explicitly: list.clear()',
        ],
      },
      {
        type: 'code',
        content: `# Generator vs List
# List - all items in memory
numbers_list = [x for x in range(1000000)]

# Generator - items created on demand
numbers_gen = (x for x in range(1000000))

# __slots__ reduces memory
class WithoutSlots:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class WithSlots:
    __slots__ = ['x', 'y']
    def __init__(self, x, y):
        self.x = x
        self.y = y

# WithSlots uses less memory`,
      },
      {
        type: 'heading',
        content: 'Shallow vs Deep Copy',
      },
      {
        type: 'code',
        content: `import copy

# Shallow copy - copies references
original = [[1, 2], [3, 4]]
shallow = original.copy()
shallow[0][0] = 999
print(original)  # [[999, 2], [3, 4]] - nested list affected!

# Deep copy - copies everything recursively
original = [[1, 2], [3, 4]]
deep = copy.deepcopy(original)
deep[0][0] = 999
print(original)  # [[1, 2], [3, 4]] - not affected
print(deep)      # [[999, 2], [3, 4]]`,
      },
      {
        type: 'note',
        content: 'Python\'s automatic memory management is powerful, but understanding mutability and references helps write more efficient code and avoid bugs.',
      },
    ],
  },

  'os-system': {
    title: 'OS & System Programming',
    description: 'Learn to interact with the operating system using Python\'s os, sys, shutil, and subprocess modules.',
    sections: [
      {
        type: 'heading',
        content: 'The os Module',
      },
      {
        type: 'text',
        content: 'The os module provides functions to interact with the operating system:',
      },
      {
        type: 'code',
        content: `import os

# Current working directory
print(os.getcwd())

# Change directory
os.chdir('/path/to/directory')

# List directory contents
files = os.listdir('.')
for file in files:
    print(file)

# Create directory
os.mkdir('new_folder')

# Create nested directories
os.makedirs('parent/child/grandchild', exist_ok=True)

# Remove directory
os.rmdir('empty_folder')  # Only works if empty

# Remove file
os.remove('file.txt')

# Rename/move file
os.rename('old_name.txt', 'new_name.txt')

# Check if path exists
if os.path.exists('file.txt'):
    print("File exists")

# Check if it's a file or directory
print(os.path.isfile('file.txt'))
print(os.path.isdir('folder'))

# Get file size
size = os.path.getsize('file.txt')
print(f"Size: {size} bytes")`,
      },
      {
        type: 'heading',
        content: 'Path Operations',
      },
      {
        type: 'code',
        content: `import os

# Join paths (works on all OS)
path = os.path.join('folder', 'subfolder', 'file.txt')
print(path)  # folder/subfolder/file.txt (or \\ on Windows)

# Split path
directory, filename = os.path.split('/path/to/file.txt')
print(directory)  # /path/to
print(filename)   # file.txt

# Split extension
name, ext = os.path.splitext('document.pdf')
print(name)  # document
print(ext)   # .pdf

# Get absolute path
abs_path = os.path.abspath('file.txt')
print(abs_path)

# Get directory name
dirname = os.path.dirname('/path/to/file.txt')
print(dirname)  # /path/to

# Get base name
basename = os.path.basename('/path/to/file.txt')
print(basename)  # file.txt`,
      },
      {
        type: 'heading',
        content: 'Environment Variables',
      },
      {
        type: 'code',
        content: `import os

# Get environment variable
home = os.environ.get('HOME')  # or os.getenv('HOME')
print(home)

# Get all environment variables
for key, value in os.environ.items():
    print(f"{key}: {value}")

# Set environment variable (for current process only)
os.environ['MY_VAR'] = 'my_value'

# Get with default value
path = os.environ.get('CUSTOM_PATH', '/default/path')`,
      },
      {
        type: 'heading',
        content: 'The sys Module',
      },
      {
        type: 'text',
        content: 'The sys module provides system-specific parameters and functions:',
      },
      {
        type: 'code',
        content: `import sys

# Python version
print(sys.version)
print(sys.version_info)

# Platform information
print(sys.platform)  # 'linux', 'darwin', 'win32'

# Command line arguments
print(sys.argv)  # ['script.py', 'arg1', 'arg2']

# Exit program with status code
# sys.exit(0)  # 0 = success
# sys.exit(1)  # 1 = error

# Python path (where modules are searched)
print(sys.path)

# Standard input/output
sys.stdout.write("Hello\\n")
line = sys.stdin.readline()

# Get object size
import sys
x = [1, 2, 3]
print(sys.getsizeof(x))  # Size in bytes`,
      },
      {
        type: 'heading',
        content: 'The shutil Module',
      },
      {
        type: 'text',
        content: 'shutil provides high-level file operations:',
      },
      {
        type: 'code',
        content: `import shutil

# Copy file
shutil.copy('source.txt', 'destination.txt')

# Copy file with metadata (permissions, timestamps)
shutil.copy2('source.txt', 'destination.txt')

# Copy directory
shutil.copytree('source_folder', 'destination_folder')

# Move file or directory
shutil.move('old_location', 'new_location')

# Remove directory and all contents
shutil.rmtree('folder_to_delete')

# Get disk usage
total, used, free = shutil.disk_usage('/')
print(f"Total: {total // (2**30)} GB")
print(f"Used: {used // (2**30)} GB")
print(f"Free: {free // (2**30)} GB")

# Archive (create zip, tar, etc.)
shutil.make_archive('backup', 'zip', 'folder_to_archive')

# Unpack archive
shutil.unpack_archive('backup.zip', 'extract_here')`,
      },
      {
        type: 'heading',
        content: 'The subprocess Module',
      },
      {
        type: 'text',
        content: 'Run external commands and programs:',
      },
      {
        type: 'code',
        content: `import subprocess

# Run command and wait for completion
result = subprocess.run(['ls', '-l'], capture_output=True, text=True)
print(result.stdout)
print(result.returncode)  # 0 = success

# Run command in shell
result = subprocess.run('echo Hello World', shell=True, capture_output=True, text=True)
print(result.stdout)

# Check if command succeeded (raises exception if fails)
try:
    subprocess.run(['ls', 'nonexistent'], check=True)
except subprocess.CalledProcessError as e:
    print(f"Command failed with code {e.returncode}")

# Get output directly
output = subprocess.check_output(['python', '--version'], text=True)
print(output)

# Run command with input
result = subprocess.run(
    ['python', '-c', 'name = input("Enter name: "); print(f"Hello {name}")'],
    input='Alice\\n',
    capture_output=True,
    text=True
)
print(result.stdout)`,
      },
      {
        type: 'heading',
        content: 'Walking Directory Trees',
      },
      {
        type: 'code',
        content: `import os

# Walk through all subdirectories
for dirpath, dirnames, filenames in os.walk('.'):
    print(f"Directory: {dirpath}")
    print(f"Subdirectories: {dirnames}")
    print(f"Files: {filenames}")
    print("---")

# Find all Python files
for dirpath, dirnames, filenames in os.walk('.'):
    for filename in filenames:
        if filename.endswith('.py'):
            full_path = os.path.join(dirpath, filename)
            print(full_path)`,
      },
      {
        type: 'note',
        content: 'Be careful when using subprocess with shell=True - it can be a security risk if you\'re passing user input. Use shell=False and pass commands as lists instead.',
      },
    ],
  },

  'sql-fundamentals': {
    title: 'SQL Fundamentals',
    description: 'Learn SQL basics including CRUD operations, joins, and database concepts.',
    sections: [
      {
        type: 'heading',
        content: 'What is SQL?',
      },
      {
        type: 'text',
        content: 'SQL (Structured Query Language) is used to manage and query relational databases. It allows you to create, read, update, and delete data.',
      },
      {
        type: 'heading',
        content: 'Creating Tables',
      },
      {
        type: 'code',
        language: 'sql',
        content: `-- Create a table
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER,
    grade TEXT,
    email TEXT UNIQUE
);

-- Create table with auto-increment
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
      },
      {
        type: 'heading',
        content: 'INSERT - Adding Data',
      },
      {
        type: 'code',
        language: 'sql',
        content: `-- Insert single row
INSERT INTO students (id, name, age, grade)
VALUES (1, 'Alice', 20, 'A');

-- Insert multiple rows
INSERT INTO students (id, name, age, grade) VALUES
    (2, 'Bob', 21, 'B'),
    (3, 'Charlie', 19, 'A'),
    (4, 'Diana', 22, 'C');

-- Insert without specifying columns (must match order)
INSERT INTO students VALUES (5, 'Eve', 20, 'B', 'eve@example.com');`,
      },
      {
        type: 'heading',
        content: 'SELECT - Reading Data',
      },
      {
        type: 'code',
        language: 'sql',
        content: `-- Select all columns
SELECT * FROM students;

-- Select specific columns
SELECT name, age FROM students;

-- Select with condition
SELECT * FROM students WHERE age > 20;

-- Select with multiple conditions
SELECT * FROM students WHERE age > 20 AND grade = 'A';

-- Select with OR
SELECT * FROM students WHERE grade = 'A' OR grade = 'B';

-- Select with LIKE (pattern matching)
SELECT * FROM students WHERE name LIKE 'A%';  -- Names starting with A

-- Order results
SELECT * FROM students ORDER BY age DESC;  -- Descending
SELECT * FROM students ORDER BY name ASC;   -- Ascending

-- Limit results
SELECT * FROM students LIMIT 5;

-- Limit with offset
SELECT * FROM students LIMIT 5 OFFSET 10;  -- Skip first 10`,
      },
      {
        type: 'heading',
        content: 'UPDATE - Modifying Data',
      },
      {
        type: 'code',
        language: 'sql',
        content: `-- Update single column
UPDATE students SET age = 21 WHERE id = 1;

-- Update multiple columns
UPDATE students SET age = 23, grade = 'A' WHERE name = 'Bob';

-- Update all rows (be careful!)
UPDATE students SET grade = 'Pass';

-- Update with condition
UPDATE students SET grade = 'A' WHERE age >= 21;`,
      },
      {
        type: 'heading',
        content: 'DELETE - Removing Data',
      },
      {
        type: 'code',
        language: 'sql',
        content: `-- Delete specific row
DELETE FROM students WHERE id = 1;

-- Delete with condition
DELETE FROM students WHERE age < 18;

-- Delete all rows (be very careful!)
DELETE FROM students;

-- Drop entire table
DROP TABLE students;`,
      },
      {
        type: 'heading',
        content: 'Aggregate Functions',
      },
      {
        type: 'code',
        language: 'sql',
        content: `-- Count rows
SELECT COUNT(*) FROM students;

-- Count specific column
SELECT COUNT(email) FROM students;

-- Average
SELECT AVG(age) FROM students;

-- Sum
SELECT SUM(age) FROM students;

-- Min and Max
SELECT MIN(age), MAX(age) FROM students;

-- Group by
SELECT grade, COUNT(*) FROM students GROUP BY grade;

-- Group by with condition
SELECT grade, AVG(age) FROM students GROUP BY grade HAVING AVG(age) > 20;`,
      },
      {
        type: 'heading',
        content: 'Joins',
      },
      {
        type: 'text',
        content: 'Joins combine data from multiple tables:',
      },
      {
        type: 'code',
        language: 'sql',
        content: `-- Create related tables
CREATE TABLE courses (
    id INTEGER PRIMARY KEY,
    name TEXT,
    credits INTEGER
);

CREATE TABLE enrollments (
    student_id INTEGER,
    course_id INTEGER,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- INNER JOIN - only matching rows
SELECT students.name, courses.name
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.id;

-- LEFT JOIN - all rows from left table
SELECT students.name, courses.name
FROM students
LEFT JOIN enrollments ON students.id = enrollments.student_id
LEFT JOIN courses ON enrollments.course_id = courses.id;

-- Aliases for shorter syntax
SELECT s.name, c.name
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON e.course_id = c.id;`,
      },
      {
        type: 'heading',
        content: 'Indexes',
      },
      {
        type: 'text',
        content: 'Indexes speed up queries but slow down inserts/updates:',
      },
      {
        type: 'code',
        language: 'sql',
        content: `-- Create index
CREATE INDEX idx_student_name ON students(name);

-- Create unique index
CREATE UNIQUE INDEX idx_student_email ON students(email);

-- Drop index
DROP INDEX idx_student_name;`,
      },
      {
        type: 'note',
        content: 'Always use WHERE clause when updating or deleting data to avoid accidentally modifying all rows. SQL is case-insensitive, but convention is to write keywords in UPPERCASE.',
      },
    ],
  },

  'python-databases': {
    title: 'Python with Databases',
    description: 'Learn how to connect Python with databases using sqlite3, MySQL connector, and SQLAlchemy ORM.',
    sections: [
      {
        type: 'heading',
        content: 'SQLite with Python',
      },
      {
        type: 'text',
        content: 'SQLite is a lightweight database that comes built-in with Python:',
      },
      {
        type: 'code',
        content: `import sqlite3

# Connect to database (creates if doesn't exist)
conn = sqlite3.connect('mydatabase.db')

# Create cursor
cursor = conn.cursor()

# Create table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE,
        age INTEGER
    )
''')

# Insert data
cursor.execute("INSERT INTO users (name, email, age) VALUES (?, ?, ?)",
               ('Alice', 'alice@email.com', 25))

# Insert multiple rows
users = [
    ('Bob', 'bob@email.com', 30),
    ('Charlie', 'charlie@email.com', 35)
]
cursor.executemany("INSERT INTO users (name, email, age) VALUES (?, ?, ?)", users)

# Commit changes
conn.commit()

# Query data
cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()
for row in rows:
    print(row)

# Query with condition
cursor.execute("SELECT * FROM users WHERE age > ?", (25,))
results = cursor.fetchall()

# Fetch one row
cursor.execute("SELECT * FROM users WHERE id = ?", (1,))
user = cursor.fetchone()
print(user)

# Close connection
conn.close()`,
      },
      {
        type: 'heading',
        content: 'Better SQLite Practices',
      },
      {
        type: 'code',
        content: `import sqlite3

# Use context manager (automatically commits/closes)
with sqlite3.connect('mydatabase.db') as conn:
    cursor = conn.cursor()
    
    # Use Row factory for dict-like access
    conn.row_factory = sqlite3.Row
    
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()
    
    for row in rows:
        print(row['name'], row['email'])  # Access by column name

# Create a database class
class Database:
    def __init__(self, db_name):
        self.conn = sqlite3.connect(db_name)
        self.cursor = self.conn.cursor()
    
    def create_user(self, name, email, age):
        self.cursor.execute(
            "INSERT INTO users (name, email, age) VALUES (?, ?, ?)",
            (name, email, age)
        )
        self.conn.commit()
    
    def get_user(self, user_id):
        self.cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
        return self.cursor.fetchone()
    
    def get_all_users(self):
        self.cursor.execute("SELECT * FROM users")
        return self.cursor.fetchall()
    
    def update_user(self, user_id, name, email, age):
        self.cursor.execute(
            "UPDATE users SET name=?, email=?, age=? WHERE id=?",
            (name, email, age, user_id)
        )
        self.conn.commit()
    
    def delete_user(self, user_id):
        self.cursor.execute("DELETE FROM users WHERE id = ?", (user_id,))
        self.conn.commit()
    
    def close(self):
        self.conn.close()

# Usage
db = Database('mydatabase.db')
db.create_user('Alice', 'alice@email.com', 25)
users = db.get_all_users()
db.close()`,
      },
      {
        type: 'heading',
        content: 'MySQL with Python',
      },
      {
        type: 'text',
        content: 'Connect to MySQL databases using mysql-connector-python:',
      },
      {
        type: 'code',
        content: `import mysql.connector

# Connect to MySQL
conn = mysql.connector.connect(
    host='localhost',
    user='your_username',
    password='your_password',
    database='your_database'
)

cursor = conn.cursor()

# Create table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        price DECIMAL(10, 2),
        stock INT
    )
""")

# Insert data
sql = "INSERT INTO products (name, price, stock) VALUES (%s, %s, %s)"
values = ('Laptop', 999.99, 50)
cursor.execute(sql, values)
conn.commit()

# Select data
cursor.execute("SELECT * FROM products")
results = cursor.fetchall()
for row in results:
    print(row)

# Update
cursor.execute("UPDATE products SET price = %s WHERE id = %s", (899.99, 1))
conn.commit()

# Delete
cursor.execute("DELETE FROM products WHERE id = %s", (1,))
conn.commit()

cursor.close()
conn.close()`,
      },
      {
        type: 'heading',
        content: 'SQLAlchemy ORM',
      },
      {
        type: 'text',
        content: 'SQLAlchemy is a powerful ORM (Object-Relational Mapping) library that lets you work with databases using Python objects:',
      },
      {
        type: 'code',
        content: `from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Create engine
engine = create_engine('sqlite:///mydatabase.db', echo=True)

# Base class
Base = declarative_base()

# Define model
class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    email = Column(String(100), unique=True)
    age = Column(Integer)
    
    def __repr__(self):
        return f"<User(name='{self.name}', email='{self.email}')>"

# Create tables
Base.metadata.create_all(engine)

# Create session
Session = sessionmaker(bind=engine)
session = Session()

# Create (INSERT)
new_user = User(name='Alice', email='alice@email.com', age=25)
session.add(new_user)
session.commit()

# Add multiple
users = [
    User(name='Bob', email='bob@email.com', age=30),
    User(name='Charlie', email='charlie@email.com', age=35)
]
session.add_all(users)
session.commit()

# Read (SELECT)
all_users = session.query(User).all()
for user in all_users:
    print(user)

# Filter
young_users = session.query(User).filter(User.age < 30).all()

# Get by ID
user = session.query(User).filter(User.id == 1).first()
# or
user = session.query(User).get(1)

# Update
user = session.query(User).filter(User.name == 'Alice').first()
user.age = 26
session.commit()

# Delete
user = session.query(User).filter(User.name == 'Bob').first()
session.delete(user)
session.commit()

# Close session
session.close()`,
      },
      {
        type: 'heading',
        content: 'SQLAlchemy Relationships',
      },
      {
        type: 'code',
        content: `from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Author(Base):
    __tablename__ = 'authors'
    
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    
    # Relationship
    books = relationship('Book', back_populates='author')

class Book(Base):
    __tablename__ = 'books'
    
    id = Column(Integer, primary_key=True)
    title = Column(String(200))
    author_id = Column(Integer, ForeignKey('authors.id'))
    
    # Relationship
    author = relationship('Author', back_populates='books')

# Create tables
Base.metadata.create_all(engine)

# Usage
author = Author(name='John Doe')
book1 = Book(title='Python Guide', author=author)
book2 = Book(title='SQL Mastery', author=author)

session.add(author)
session.add_all([book1, book2])
session.commit()

# Query with relationship
author = session.query(Author).first()
print(f"Author: {author.name}")
for book in author.books:
    print(f"  - {book.title}")`,
      },
      {
        type: 'heading',
        content: 'Advanced SQLAlchemy Queries',
      },
      {
        type: 'code',
        content: `# Filter with multiple conditions
users = session.query(User).filter(
    User.age > 25,
    User.name.like('A%')
).all()

# OR condition
from sqlalchemy import or_
users = session.query(User).filter(
    or_(User.age < 20, User.age > 30)
).all()

# Order by
users = session.query(User).order_by(User.age.desc()).all()

# Limit and offset
users = session.query(User).limit(5).offset(10).all()

# Count
count = session.query(User).count()

# Aggregate functions
from sqlalchemy import func
avg_age = session.query(func.avg(User.age)).scalar()
max_age = session.query(func.max(User.age)).scalar()

# Group by
results = session.query(
    User.age,
    func.count(User.id)
).group_by(User.age).all()`,
      },
      {
        type: 'note',
        content: 'SQLAlchemy ORM is more Pythonic and handles many SQL complexities for you. However, raw SQL (sqlite3, mysql.connector) gives you more control and can be faster for simple operations.',
      },
    ],
  },
};
