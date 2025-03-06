'use client'
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Item = {
  date: string;
  title: string;
  description: string;
  type: string;
  link: string;
  venue?: string;
  category: 'notice' | 'event';
};

const items: Item[] = [
  {
    date: '2024-03-15',
    title: 'Admission Notice 2024-25',
    description: 'Applications are open for B.Ed and M.Ed programs',
    type: 'admission',
    link: '/notice/admission-2024',
    category: 'notice'
  },
  {
    date: '2024-03-20',
    title: 'Annual Cultural Fest',
    description: 'Three-day cultural extravaganza',
    type: 'cultural',
    venue: 'College Auditorium',
    link: '/events/cultural-fest',
    category: 'event'
  },
  {
    date: '2024-03-10',
    title: 'Scholarship Applications',
    description: 'Last date for merit scholarship submission',
    type: 'general',
    link: '/notice/scholarship',
    category: 'notice'
  },
  {
    date: '2024-03-25',
    title: 'Technical Symposium',
    description: 'National level technical paper presentation',
    type: 'technical',
    venue: 'Seminar Hall',
    link: '/events/tech-symposium',
    category: 'event'
  },
  // ... add more items sorted by date
];

const getIcon = (type: string, category: string) => {
  if (category === 'notice') {
    switch (type) {
      case 'admission': return '📝';
      case 'academic': return '📚';
      case 'exam': return '✍️';
      default: return '📢';
    }
  } else {
    switch (type) {
      case 'cultural': return '🎭';
      case 'technical': return '💻';
      case 'seminar': return '🎯';
      case 'sports': return '🏆';
      default: return '📅';
    }
  }
};

export default function NoticeAndEvents({ 
  limit = 5,
  searchQuery = '',
  dateFilter = 'all'
}: { 
  limit?: number;
  searchQuery?: string;
  dateFilter?: string;
}) {
  const pathname = usePathname();
  const isUpdatesPage = pathname === '/updates';

  const filteredItems = useMemo(() => {
    let filtered = [...items].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply date filter
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison

    switch (dateFilter) {
      case 'upcoming':
        filtered = filtered.filter(item => {
          const itemDate = new Date(item.date);
          itemDate.setHours(0, 0, 0, 0);
          return itemDate >= today;
        });
        // Sort upcoming by nearest date first
        filtered.sort((a, b) => 
          new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
      case 'past':
        filtered = filtered.filter(item => {
          const itemDate = new Date(item.date);
          itemDate.setHours(0, 0, 0, 0);
          return itemDate < today;
        });
        // Sort past by most recent first
        filtered.sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
    }

    return filtered;
  }, [searchQuery, dateFilter]);

  const displayItems = isUpdatesPage ? filteredItems : filteredItems.slice(0, limit);

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className={`${isUpdatesPage ? 'grid md:grid-cols-2 gap-6' : 'space-y-6'}`}>
            {displayItems.length > 0 ? (
              displayItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="block bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-900/50 shadow hover:shadow-md transition-all duration-200 group"
                >
                  <div className="p-5">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30 text-2xl">
                        {getIcon(item.type, item.category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              item.category === 'notice' 
                                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300'
                                : 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300'
                            }`}>
                              {item.category === 'notice' ? 'Notice' : 'Event'}
                            </span>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                              {item.title}
                            </h3>
                          </div>
                          <time className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                            {new Date(item.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </time>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                          {item.description}
                        </p>
                        {item.venue && (
                          <div className="mt-3 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {item.venue}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-2 text-center py-8 text-gray-500 dark:text-gray-400">
                No results found
              </div>
            )}
          </div>
        </div>
      </div>

      {!isUpdatesPage && (
        <div className="mt-8 text-center">
          <Link
            href="/updates"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            View All Updates
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
} 