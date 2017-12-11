class Task < ApplicationRecord
  include RailsSortable::Model
  set_sortable :sort
end
