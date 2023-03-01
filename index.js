import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://rdgyjeklbhemzvnotrhs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkZ3lqZWtsYmhlbXp2bm90cmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyNjQyMjUsImV4cCI6MTk5Mjg0MDIyNX0.0OmgcvIgHo67smeVXPD6qSYXXS_4qs-gaK7BFFiWOCk'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td>${book.description}</td>`;
  }
}

getBooks()
