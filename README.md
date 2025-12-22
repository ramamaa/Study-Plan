# AI Learning Intelligence Platform , STUDY PLAN

An AI-powered education system that adapts how students learn
using planning, exams, and AI-driven analysis.

---

## Problem

Students use many tools that do not work together.
Study plans do not adapt based on exam results or learning progress.

---

## Solution

This project creates a closed learning loop:

Plan → Study → Test → Analyze → Improve Plan

AI is used only for reasoning, not for storing data.

---

## High-Level Architecture

[ User ]
↓
[ Next.js Frontend ]
↓
[ API Routes ]
↓
[ Domain Services ]
↓
[ AI Context Builder ]
↓
[ Gemini AI ]
↓
[ MongoDB ]

---

## Repository Structure

---

## AI Usage Strategy

- AI receives summarized context only
- MongoDB is the source of truth
- AI is called only on major events
- AI output is cached for demo safety

This allows the project to run on free AI tiers.

---

## Project Scope

- One subject
- One exam
- One re-planning cycle

The goal is to demonstrate system intelligence, not a full product.

---

## Team Roles

- Team Lead: Architecture, AI strategy
- Frontend: UI and UX
- Backend: API and database
- AI: Prompt engineering
