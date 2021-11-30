require 'rails_helper'

RSpec.describe User, type: :model do
  it 'only require username' do
    User.create(username: 'jaar')
    expect(User.all.length).to eq(1)
  end

  it 'should only be one username' do
    User.create(username: 'jaar')
    User.create(username: 'jaar')
    expect(User.all.length).to eq(1)
  end

  it 'username is require' do
    User.create(username: '')
    expect(User.all.length).to eq(0)
  end
end
