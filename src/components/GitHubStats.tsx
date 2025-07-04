import React from 'react';
import { Github, Star, GitFork, Eye, Trophy } from 'lucide-react';

const GitHubStats = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl font-bold mb-6">GitHub Insights</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            My coding journey in numbers - live stats from GitHub showcasing contributions, 
            languages, and development activity.
          </p>
        </div>

        {/* GitHub Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Overall Stats */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 fade-in">
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 bg-blue-500 rounded-xl">
                <Github className="w-8 h-8" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">GitHub</div>
                <div className="text-blue-300">Overall Stats</div>
              </div>
            </div>
            <img 
              src="https://github-readme-stats.vercel.app/api?username=GIRIDHAR-GEDELA&show_icons=true&theme=radical&hide_border=true&bg_color=1a1b27&title_color=f7df1e&icon_color=f7df1e&text_color=ffffff"
              alt="Giridhar's GitHub Stats"
              className="w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          {/* Streak Stats */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 fade-in">
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 bg-yellow-500 rounded-xl">
                <Star className="w-8 h-8" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">Streak</div>
                <div className="text-yellow-300">Consistency</div>
              </div>
            </div>
            <img 
              src="https://github-readme-streak-stats.herokuapp.com/?user=GIRIDHAR-GEDELA&theme=radical&hide_border=true&background=1a1b27&stroke=f7df1e&ring=f7df1e&fire=f7df1e&currStreakLabel=ffffff"
              alt="Giridhar's GitHub Streak"
              className="w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          {/* Top Languages */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 fade-in md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 bg-purple-500 rounded-xl">
                <GitFork className="w-8 h-8" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">Languages</div>
                <div className="text-purple-300">Most Used</div>
              </div>
            </div>
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=GIRIDHAR-GEDELA&layout=compact&theme=radical&hide_border=true&bg_color=1a1b27&title_color=f7df1e&text_color=ffffff"
              alt="Giridhar's Top Languages"
              className="w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* GitHub Trophies */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 fade-in mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">GitHub Trophies</h3>
              <p className="text-gray-300">Achievements and milestones</p>
            </div>
            <div className="p-4 bg-yellow-500 rounded-xl">
              <Trophy className="w-8 h-8" />
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 overflow-x-auto">
            <img 
              src="https://github-profile-trophy.vercel.app/?username=GIRIDHAR-GEDELA&theme=dracula&no-frame=true&margin-w=5&column=7"
              alt="Giridhar's GitHub Trophies"
              className="w-full min-w-[800px] rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* GitHub Activity Graph */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 fade-in">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Contribution Activity</h3>
              <p className="text-gray-300">My coding journey visualized</p>
            </div>
            <div className="p-4 bg-green-500 rounded-xl">
              <Eye className="w-8 h-8" />
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 overflow-x-auto">
            <img 
              src="https://github-readme-activity-graph.vercel.app/graph?username=GIRIDHAR-GEDELA&theme=react-dark&hide_border=true&bg_color=1a1b27&color=f7df1e&line=f7df1e&point=ffffff"
              alt="Giridhar's GitHub Activity Graph"
              className="w-full min-w-[800px] rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-16 fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-purple-700">
            <a
              href="https://github.com/GIRIDHAR-GEDELA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="w-6 h-6 mr-3" />
              <span>View Full GitHub Profile</span>
            </a>
          </div>
          <p className="text-gray-300 mt-4 text-lg">
            Continuously learning and building amazing projects! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;