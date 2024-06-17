import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 4rem auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 2.4rem;
`;

const TextArea = styled.textarea`
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 2.4rem;
  resize: none;
`;

const Button = styled.button`
  padding: 2rem;
  margin: 2rem 0;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 2.4rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddVideo = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/video/upload', formData);
      toast.success('Video added successfully'); // Show success toast
      setFormData({
        title: '',
        description: '',
        url: '',
      });
    } catch (error) {
      console.error('Failed to add video:', error);
    }
  };

  return (
    <FormContainer>
      <h2>Add New Video</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <TextArea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
          rows="5"
        />
        <Input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="Video URL"
          required
        />
        <Button type="submit">Add Video</Button>
      </Form>
    </FormContainer>
  );
};

export default AddVideo;
