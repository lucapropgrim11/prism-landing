-- Create the pre_registrations table
create table if not exists pre_registrations (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null unique,
  company text,
  role text,
  registered_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create an index on email for faster lookups
create index if not exists pre_registrations_email_idx on pre_registrations (email); 