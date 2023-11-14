import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import RootLayout from './RootLayout.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.tsx'
import AskQuestion from './pages/AskQuestion.tsx'
import Questions, { loader as questionsLoader } from './pages/Questions.tsx'
import SingleQuestion, { loader as singleQuestionLoader } from './pages/SingleQuestion.tsx'
import Users, { loader as userLoader } from './pages/Users.tsx'
import SingleUser, { loader as singleUserLoader } from './pages/SingleUser.tsx'
import LoginPage, { action as loginAction } from './pages/LoginPage.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="ask" element={<AskQuestion />} />
      <Route path="questions">
        <Route index loader={questionsLoader} element={<Questions />} />
        <Route path=":questionId" loader={singleQuestionLoader} element={<SingleQuestion />} />
      </Route>
      <Route path="users">
        <Route index loader={userLoader} element={<Users />} />
        <Route path=":userId" loader={singleUserLoader} element={<SingleUser />} />
      </Route>
      <Route path="login" element={<LoginPage />} action={loginAction} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
