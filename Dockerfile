FROM ruby:slim

# Install Jekyll + dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential git && \
    gem install jekyll bundler && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy Gemfile, Gemfile.lock, AND .gemspec file first
COPY Gemfile Gemfile.lock *.gemspec ./
RUN bundle install

# Copy the rest of the app
COPY . .

EXPOSE 6969

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "6969", "--force_polling", "--livereload"]