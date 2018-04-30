10.times do |i|
  Lesson.create(title: "Lesson #{i + 1}", content: Faker::Lorem.paragraphs)
end
