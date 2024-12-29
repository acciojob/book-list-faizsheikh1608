//your JS code here. If required.
 document.getElementById('submit').addEventListener('click', function(event) {
      event.preventDefault();

      // Get input values
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const isbn = document.getElementById('isbn').value;

      if (!title || !author || !isbn) {
        alert('Please fill in all fields.');
        return;
      }

      // Create a new row
      const row = document.createElement('tr');

      // Add cells to the row
      row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
      `;

      // Append the row to the table
      document.getElementById('book-list').appendChild(row);

      // Clear input fields
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
    });

    // Add event listener for delete buttons
    document.getElementById('book-list').addEventListener('click', function(event) {
      if (event.target.classList.contains('delete')) {
        const row = event.target.parentElement.parentElement;
        row.remove();
      }
    });