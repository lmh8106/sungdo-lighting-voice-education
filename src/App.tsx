/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Zap, 
  Mic2, 
  Users, 
  Calendar, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  DollarSign,
  CheckCircle2,
  Circle,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { PROJECT_DATA } from "./constants";
import { Student, Mentor, Equipment, Milestone } from "./types";

const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle?: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 bg-blue-500/10 rounded-lg">
      <Icon className="w-5 h-5 text-blue-400" />
    </div>
    <div>
      <h2 className="text-lg font-bold tracking-tight text-white">{title}</h2>
      {subtitle && <p className="text-xs text-slate-400 font-mono">{subtitle}</p>}
    </div>
  </div>
);

const StudentCard = ({ student }: { student: Student }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass-card p-4 flex flex-col gap-4"
  >
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-base font-bold text-white">{student.name}</h3>
        <p className="text-xs text-slate-400">멘토: {student.mentor}</p>
      </div>
      <span className={`status-badge ${
        student.status === 'Training' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'
      }`}>
        {student.status === 'Training' ? '교육 중' : '대기 중'}
      </span>
    </div>

    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-mono text-slate-500">
        <span>PROGRESS</span>
        <span>{student.progress}%</span>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${student.progress}%` }}
          className="h-full bg-blue-500"
        />
      </div>
    </div>

    <div className="space-y-1">
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Current Tasks</p>
      <ul className="space-y-1">
        {student.tasks.map((task, i) => (
          <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
            <div className="w-1 h-1 bg-blue-400 rounded-full" />
            {task}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const EquipmentCard = ({ item }: { item: Equipment }) => (
  <div className="glass-card p-4 border-l-4 border-l-blue-500">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-sm font-bold text-white">{item.model}</h3>
      <span className="text-xs font-mono text-blue-400">{item.price}</span>
    </div>
    <p className="text-xs text-slate-400">{item.features}</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen p-6 lg:p-10 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold tracking-[0.2em] uppercase">
            <TrendingUp className="w-4 h-4" />
            Project Dashboard v1.0
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
            {PROJECT_DATA.title}
          </h1>
          <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
            {PROJECT_DATA.summary}
          </p>
        </div>
        
        <div className="glass-card px-6 py-4 border-t-2 border-t-blue-500">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-full">
              <DollarSign className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sponsor</p>
              <p className="text-sm font-bold text-white">{PROJECT_DATA.sponsor}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: People & Progress */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Lighting Section */}
          <section>
            <SectionHeader 
              icon={Zap} 
              title="Lighting Department" 
              subtitle="조명 파트 인력 현황 및 교육 진척도" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECT_DATA.students.filter(s => s.specialty === 'Lighting').map(student => (
                <StudentCard key={student.name} student={student} />
              ))}
            </div>
          </section>

          {/* Sound Section */}
          <section>
            <SectionHeader 
              icon={Mic2} 
              title="Sound Department" 
              subtitle="음향 파트 교육 계획 (부활절 이후 본격화)" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECT_DATA.students.filter(s => s.specialty === 'Sound').map(student => (
                <StudentCard key={student.name} student={student} />
              ))}
            </div>
          </section>

          {/* DX Equipment Section */}
          <section>
            <SectionHeader 
              icon={Cpu} 
              title="2027 DX Infrastructure" 
              subtitle="디지털 인프라 전환 도입 후보 장비 분석" 
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PROJECT_DATA.equipmentCandidates.map(item => (
                <EquipmentCard key={item.model} item={item} />
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Roadmap & Mentors */}
        <div className="lg:col-span-4 space-y-10">
          
          {/* Roadmap */}
          <section className="glass-card p-6">
            <SectionHeader 
              icon={Calendar} 
              title="Project Roadmap" 
            />
            <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-800">
              {PROJECT_DATA.roadmap.map((milestone, i) => (
                <div key={i} className="relative pl-8 group">
                  <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-[#1A1D23] z-10 flex items-center justify-center ${
                    milestone.completed ? 'bg-blue-500' : 'bg-slate-800'
                  }`}>
                    {milestone.completed ? (
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    ) : (
                      <Circle className="w-3 h-3 text-slate-600" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-blue-400">{milestone.date}</span>
                    <h4 className={`text-sm font-bold ${milestone.completed ? 'text-white' : 'text-slate-400'}`}>
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-tight">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mentors */}
          <section className="glass-card p-6">
            <SectionHeader 
              icon={Users} 
              title="Professional Mentors" 
            />
            <div className="space-y-4">
              {PROJECT_DATA.mentors.map(mentor => (
                <div key={mentor.name} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${mentor.specialty === 'Lighting' ? 'bg-amber-400' : 'bg-blue-400'}`} />
                    <div>
                      <p className="text-xs font-bold text-white">{mentor.name}</p>
                      <p className="text-[10px] text-slate-500">{mentor.role}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                </div>
              ))}
            </div>
          </section>

          {/* Certification Info */}
          <section className="bg-blue-600 rounded-xl p-6 text-white overflow-hidden relative">
            <ShieldCheck className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12" />
            <h3 className="text-lg font-black mb-2 tracking-tight">국가 공인 전문성</h3>
            <p className="text-xs text-blue-100 mb-4 leading-relaxed">
              무대예술전문인 3급 자격 취득 권고.<br/>
              카르페디엠 활동 실무 경력 1년 인정 지원.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
              Learn More <ArrowRight className="w-3 h-3" />
            </div>
          </section>
        </div>
      </div>

      {/* Footer Status Bar */}
      <footer className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500" /> SYSTEM ONLINE
          </span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-500" /> DX PHASE: 01
          </span>
        </div>
        <div>
          LAST UPDATED: 2026-03-28 14:23:33 UTC
        </div>
      </footer>
    </div>
  );
}
