class AddSortToTask < ActiveRecord::Migration[5.1]
  def change
    add_column :tasks, :sort, :integer
  end
end
