import mongoose from 'mongoose'
import { connectDatabase } from '../config/database'

async function seedDatabase() {
  console.log('Seed the octofit_db database with test data')

  await connectDatabase()

  const usersCollection = mongoose.connection.collection('users')
  const teamsCollection = mongoose.connection.collection('teams')
  const activitiesCollection = mongoose.connection.collection('activities')
  const workoutsCollection = mongoose.connection.collection('workouts')

  await usersCollection.deleteMany({})
  await teamsCollection.deleteMany({})
  await activitiesCollection.deleteMany({})
  await workoutsCollection.deleteMany({})

  await usersCollection.insertMany([
    { name: 'Ava', email: 'ava@example.com', role: 'athlete', progress: 72 },
    { name: 'Noah', email: 'noah@example.com', role: 'coach', progress: 88 },
  ])

  await teamsCollection.insertMany([
    { name: 'Trail Blazers', score: 420 },
    { name: 'Sprint Squad', score: 390 },
  ])

  await activitiesCollection.insertMany([
    { user: 'Ava', type: 'run', distanceKm: 5.1, durationMinutes: 28 },
    { user: 'Noah', type: 'bike', distanceKm: 22.7, durationMinutes: 64 },
  ])

  await workoutsCollection.insertMany([
    { title: 'Core Strength', level: 'intermediate', focus: 'stability' },
    { title: 'Interval Power', level: 'advanced', focus: 'speed' },
  ])

  console.log('✅ Test data seeded into octofit_db successfully')
  await mongoose.disconnect()
}

seedDatabase().catch((error) => {
  console.error('❌ Error seeding database:', error)
  process.exit(1)
})
