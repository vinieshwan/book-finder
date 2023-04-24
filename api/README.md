# Book finder App API
Handles the business logic of the APIs. Currently we have 3 API endpoints. One is for retrieving a book details by ISBN, one for converting ISBN from ISBN-13 to ISBN-10 or vice versa and the last one is for determining if the provided number is an ISBN-13 or ISBN-10.

To run independently just type the following command:
```sh
    $ ./bin/setup
```

## API Endpoints
- <a href="#retrieve-book-details">Retrieve book details</a>
- <a href="#convert-isbn">Convert ISBN</a>
- <a href="#which-isbn">Which ISBN</a>

### Retrieve book details
Returns the book details

<table>
    <tr>
        <th>Request Sample</th>
    </tr>
    <tr>
        <td><code>[GET]</code> /api/books/:id</td>
    </tr>
    <tr>
        <td>CURL</td>
    </tr>
    <tr>
        <td>
            <pre>
curl -L \
-H "Accept: application/json" \
http://localhost:&lt;PORT&gt;/api/books/:id</pre>
        </td>
    </tr>
</table>

<table>
    <tr>
        <th>Response status codes</th>
    </tr>
    <tr>
        <td>
            Status Codes<br />
            ____________________________________________<br /><br />
            <code>200</code> - OK<br />
            <code>404</code> - Not Found<br />
            <code>400</code> - Bad request<br />
        </td>
    </tr>
</table>

### Convert ISBN
Returns the converted ISBN

<table>
    <tr>
        <th>Request Sample</th>
    </tr>
    <tr>
        <td><code>[GET]</code> /api/books/isbn_conversion/:id</td>
    </tr>
    <tr>
        <td>CURL</td>
    </tr>
    <tr>
        <td>
            <pre>
curl -L \
-H "Accept: application/json" \
http://localhost:&lt;PORT&gt;/api/books/isbn_conversion/:id</pre>
        </td>
    </tr>
</table>

<table>
    <tr>
        <th>Response status codes</th>
    </tr>
    <tr>
        <td>
            Status Codes<br />
            ____________________________________________<br /><br />
            <code>200</code> - OK<br />
            <code>400</code> - Bad request<br />
        </td>
    </tr>
</table>

### Which ISBN
Returns the ISBN type

<table>
    <tr>
        <th>Request Sample</th>
    </tr>
    <tr>
        <td><code>[GET]</code> /api/books/which_isbn/:id</td>
    </tr>
    <tr>
        <td>CURL</td>
    </tr>
    <tr>
        <td>
            <pre>
curl -L \
-H "Accept: application/json" \
http://localhost:&lt;PORT&gt;/api/books/which_isbn/:id</pre>
        </td>
    </tr>
</table>

<table>
    <tr>
        <th>Response status codes</th>
    </tr>
    <tr>
        <td>
            Status Codes<br />
            ____________________________________________<br /><br />
            <code>200</code> - OK<br />
            <code>400</code> - Bad request<br />
        </td>
    </tr>
</table>
