FROM ruby:slim

# Install Jekyll + dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential git curl && \
    gem install jekyll bundler && \
    rm -rf /var/lib/apt/lists/*

# [Optional] Install Node.js (required for some Jekyll plugins/live-reload)
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g yarn

WORKDIR /workspace

# Copy Gemfile and install dependencies first (caching optimization)
COPY Gemfile Gemfile.lock *.gemspec ./
RUN bundle install

# [Optional] VS Code extensions dependencies (if needed)
RUN curl -sL https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] https://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends google-chrome-stable

EXPOSE 6969

# [Optional] Default command (VS Code will override this)
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "6969", "--force_polling", "--livereload"]