import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, AppBar, Toolbar } from '@mui/material';
import axios from 'axios';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/blogs')
      .then(response => {
        setBlogs(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);


  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h2" gutterBottom>
          Blogs
        </Typography>
        <Grid container spacing={3}>
          {blogs.map(blog => (
            <Grid item key={blog.id} xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {blog.attributes.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {blog.attributes.text.substring(0, 100)}...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
