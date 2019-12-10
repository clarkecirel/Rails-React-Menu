5.times do 
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: Faker::Number.decimal(l_digits: 1, r_digits: 2),
    menu_id: 5,
  )
end


