# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: Since Ruby is Object-oriented Programming, it allows abstraction, encapsulation, polymorphism, and inheritance. In Ruby, when a developer uses the keyword super in a class, the developer calls an initialized method in a superclass. In the case of calling super in a class, this allows the developer to inherit the methods initialized in a superclass.  For example, a developer can create a class called Animals.  Within the class, you can have attributes that can describe an animal, like the type of animal, the animal's age, and so forth.  A developer can create a dog class and call super on the initialized method, Animals.  The dog class will inherit attributes like type of animal and age and can add additional attributes like type of dog and so forth.

Researched answer: Since Ruby is Object-oriented Programming, it allows abstraction, encapsulation, polymorphism, and inheritance. In Ruby, when a developer uses the super keyword in a class, the developer calls an initialized method in a superclass or parent class. This allows access to the parent’s properties and methods.  For example, a developer can create a class called Animals.  Within the class, you can have methods describing an animal, like the type of animal, the animal's age, and so forth.  A developer can create a dog class and call super on the initialized method, Animals.  The dog class will inherit the parent’s properties and methods like the type of animal and age and can add additional properties and methods like the type of dog and so forth.

2. What is a gem?

Your answer: A gem managed by the Ruby package manager, called RubyGems, provides a library or code functionality.  It helps developers share functionality and implement functionality in an application.  For example, in Ruby, a developer can add RSpec, a gem, to do testing that describes a desired output based on specifications created by the developer.

Researched answer: A gem is packaged in Ruby code or functionality from open-source libraries.  It helps developers share and apply functionality or code within the gem without having to rewrite the code every time a developer creates a new project.  For example, if a developer would like to use a testing framework, they could use the gem RSpec, which supports Behavior Driven Development for Ruby.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database consists of a table where information is displayed in rows in columns.  This is similar to how data is shown in Excel spreadsheets.  There are other kinds of databases, like NoSQL and Object-oriented databases.

Researched answer: A relational database centers its idea by presenting data in a table consisting of rows and columns.  This makes it easier to look at and access data from different data points about one another.  Each row consists of a unique ID called the primary key, and each column displays the attributes of data.  There are various kinds of databases, like hierarchical databases, network databases, and NoSQL databases.

4. What are primary keys? Why are they important?

Your answer: In a relational database, information is displayed in a table consisting of rows and columns.  Each row has a unique identifier called a primary key.  Primary keys help identify data about the specific row and column.  A primary key is essential because it helps identify individual rows when executing queries.

Researched answer: In a relational database, information is displayed in a table consisting of rows and columns.  Each row has a unique primary key identifier, which identifies a row with its columns or attributes in a database table. Each row must contain a unique primary key and cannot be null. A primary key is essential to ensure users access the correct table record when executing queries.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: Five HTTP verbs control the behavior of a webpage, get, post, put, patch, and delete.  These verbs correspond to CRUD, which is created, read, update, and delete and is how to communicate with a web app.  Create fits with post, read with get, update with put and patch, and delete with delete.

Researched answer: HTTP consists of five action verbs that control a webpage's behavior: post, get, put, patch, and delete.  These verbs correspond to create, read, update, and delete or CRUD communication with respect to post, get, put, patch, and delete.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: RESTful routes allow developers to execute CRUD actions.  It can include  an index, new, create, show, edit, update, and destroy.

2. Model validations: Model validations ensure that only valid data is saved to a database.

3. Params: Parms, short for parameter methods, help users send data to web applications.

4. ERB: ERB is a Ruby templating language that generates any text.

5. API: API stands for an application programming interface.  APIs define protocols that enable software components to communicate.
