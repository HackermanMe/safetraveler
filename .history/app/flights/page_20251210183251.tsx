"use client";

import { useState, useEffect } from "react";
import {
  Plane,
  Clock,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Radio,
} from "lucide-react";
import { theme } from "@/lib/config/theme";
import { useLocale } from "@/lib/context/LocaleContext";

interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  airlineCode: string;
  origin: string;
  destination: string;
  scheduledTime: string;
  estimatedTime: string;
  status: 'on-time' | 'delayed' | 'boarding' | 'departed' | 'arrived' | 'cancelled';
  gate?: string;
  terminal?: string;
  delay?: number;
  type: 'departure' | 'arrival';
}

export default function FlightsPage() {
  const { t } = useLocale();
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'departure' | 'arrival'>('all');
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [dataSource, setDataSource] = useState<'api' | 'simulated'>('simulated');

  const fetchFlights = async (showLoader = true) => {
    if (showLoader) {
      setRefreshing(true);
    }
    try {
      const url = filter === 'all' ? '/api/flights' : `/api/flights?type=${filter}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        setFlights(data.data);
        setLastUpdate(new Date());
        setDataSource(data.source || 'simulated');
      }
    } catch (error) {
      console.error('Error fetching flights:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchFlights();
    // Auto-refresh every 5 minutes
    const interval = setInterval(() => fetchFlights(false), 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [filter]);

  const getStatusColor = (status: Flight['status']) => {
    const colors = {
      'on-time': theme.colors.success.main,
      'delayed': theme.colors.warning.main,
      'boarding': theme.colors.info.main,
      'departed': theme.colors.gray[500],
      'arrived': theme.colors.success.dark,
      'cancelled': theme.colors.error.main,
    };
    return colors[status];
  };

  const getStatusLabel = (status: Flight['status']) => {
    const statusMap: Record<Flight['status'], string> = {
      'on-time': t('flights.status.onTime'),
      'delayed': t('flights.status.delayed'),
      'boarding': t('flights.status.boarding'),
      'departed': t('flights.status.departed'),
      'arrived': t('flights.status.arrived'),
      'cancelled': t('flights.status.cancelled'),
    };
    return statusMap[status];
  };

  const getStatusIcon = (status: Flight['status']) => {
    const icons = {
      'on-time': CheckCircle2,
      'delayed': AlertCircle,
      'boarding': Radio,
      'departed': TrendingUp,
      'arrived': CheckCircle2,
      'cancelled': AlertCircle,
    };
    const Icon = icons[status];
    return <Icon className="w-4 h-4" />;
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  const departures = flights.filter(f => f.type === 'departure');
  const arrivals = flights.filter(f => f.type === 'arrival');

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center pb-20"
        style={{ backgroundColor: theme.colors.background.default }}
      >
        <div className="text-center">
          <div
            className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4"
            style={{
              borderColor: theme.colors.accent.main,
              borderTopColor: 'transparent',
            }}
          />
          <p style={{ color: theme.colors.text.secondary, fontSize: theme.typography.base.fontSize }}>
            {t('flights.loading')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pb-20"
      style={{ backgroundColor: theme.colors.background.default }}
    >
      {/* Header - Mobile First */}
      <div
        className="sticky top-[56px] md:top-[64px] z-40 backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderBottom: `1px solid ${theme.colors.border.main}`,
          boxShadow: theme.shadow.sm,
        }}
      >
        <div className="px-4 py-4">
          <div className="mb-3">
            <h1
              className="font-bold mb-1"
              style={{
                fontSize: theme.typography.h4.fontSize,
                fontWeight: theme.typography.h4.fontWeight,
                color: theme.colors.text.primary,
              }}
            >
              {t('flights.title')}
            </h1>
            <p
              className="text-xs"
              style={{
                color: theme.colors.text.secondary,
              }}
            >
              {t('flights.subtitle')}
            </p>
          </div>

          {/* Filter Tabs - Mobile Optimized */}
          <div className="flex gap-2">
            {[
              { value: 'all' as const, icon: Plane, count: flights.length, labelKey: 'flights.filters.all' },
              { value: 'departure' as const, icon: TrendingUp, count: departures.length, labelKey: 'flights.filters.departure' },
              { value: 'arrival' as const, icon: TrendingDown, count: arrivals.length, labelKey: 'flights.filters.arrival' },
            ].map((tab) => {
              const isActive = filter === tab.value;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className="flex-1 rounded-lg font-medium transition-all flex flex-col items-center justify-center"
                  style={{
                    padding: `${theme.spacing[3]} ${theme.spacing[2]}`,
                    backgroundColor: isActive
                      ? theme.colors.accent.main
                      : theme.colors.background.elevated,
                    color: isActive
                      ? theme.colors.accent.contrast
                      : theme.colors.text.primary,
                    border: `1px solid ${isActive ? theme.colors.accent.main : theme.colors.border.main}`,
                  }}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-bold">{tab.count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 py-3">
        <div
          className="rounded-lg p-3 flex flex-col gap-2"
          style={{
            backgroundColor: theme.colors.info.main + '10',
            border: `1px solid ${theme.colors.info.main}30`,
          }}
        >
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" style={{ color: theme.colors.info.main }} />
            <p className="text-xs" style={{ color: theme.colors.text.primary }}>
              {lastUpdate ? (
                <>{t('flights.lastUpdate')}: {lastUpdate.toLocaleTimeString('fr-FR')}</>
              ) : (
                t('common.loading')
              )}
            </p>
          </div>
          {dataSource === 'simulated' && (
            <span
              className="px-2 py-1 rounded-full text-xs font-medium self-start"
              style={{
                backgroundColor: theme.colors.warning.main + '20',
                color: theme.colors.warning.dark,
              }}
            >
              {t('flights.demoMode')}
            </span>
          )}
        </div>
      </div>

      {/* Flights List */}
      {flights.length === 0 ? (
        <div className="px-4 py-8">
          <div
            className="rounded-xl p-8 text-center"
            style={{
              backgroundColor: theme.colors.background.elevated,
              border: `1px solid ${theme.colors.border.main}`,
            }}
          >
            <Plane className="w-12 h-12 mx-auto mb-3" style={{ color: theme.colors.gray[400] }} />
            <h3
              className="font-semibold mb-1"
              style={{
                fontSize: theme.typography.base.fontSize,
                color: theme.colors.text.primary,
              }}
            >
              {t('flights.noFlights')}
            </h3>
            <p className="text-xs" style={{ color: theme.colors.text.secondary }}>
              {t('flights.noFlightsDescription')}
            </p>
          </div>
        </div>
      ) : (
        <div className="px-4 space-y-3 pb-4">
          {flights.map((flight) => (
            <div
              key={flight.id}
              className="rounded-xl transition-all"
              style={{
                backgroundColor: theme.colors.background.elevated,
                border: `1px solid ${theme.colors.border.main}`,
                boxShadow: theme.shadow.sm,
              }}
            >
              {/* Flight Header */}
              <div
                className="p-3 flex items-center justify-between"
                style={{
                  borderBottom: `1px solid ${theme.colors.border.main}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold"
                    style={{
                      backgroundColor: theme.colors.accent.main + '20',
                      color: theme.colors.accent.dark,
                      fontSize: theme.typography.small.fontSize,
                    }}
                  >
                    {flight.airlineCode}
                  </div>
                  <div>
                    <h3
                      className="font-bold"
                      style={{
                        fontSize: theme.typography.base.fontSize,
                        color: theme.colors.text.primary,
                      }}
                    >
                      {flight.flightNumber}
                    </h3>
                    <p className="text-xs" style={{ color: theme.colors.text.secondary }}>
                      {flight.airline}
                    </p>
                  </div>
                </div>

                {/* Type Badge */}
                <span
                  className="px-2 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: flight.type === 'departure'
                      ? theme.colors.info.main + '20'
                      : theme.colors.success.main + '20',
                    color: flight.type === 'departure'
                      ? theme.colors.info.dark
                      : theme.colors.success.dark,
                  }}
                >
                  {flight.type === 'departure' ? t('flights.types.departure') : t('flights.types.arrival')}
                </span>
              </div>

              {/* Route & Status */}
              <div className="p-3 space-y-3">
                {/* Route */}
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <p
                      className="font-semibold mb-0.5 text-sm"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {flight.origin}
                    </p>
                    <p className="text-xs" style={{ color: theme.colors.text.secondary }}>
                      {formatTime(flight.scheduledTime)}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 flex-shrink-0" style={{ color: theme.colors.gray[400] }} />
                  <div className="flex-1 text-right">
                    <p
                      className="font-semibold mb-0.5 text-sm"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {flight.destination}
                    </p>
                    <p className="text-xs" style={{ color: theme.colors.text.secondary }}>
                      {formatTime(flight.estimatedTime)}
                      {flight.delay && flight.delay > 0 && (
                        <span style={{ color: theme.colors.warning.main }}>
                          {' '}(+{flight.delay}min)
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Status & Gate/Terminal */}
                <div className="flex items-center justify-between gap-2">
                  {/* Status */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold"
                    style={{
                      backgroundColor: getStatusColor(flight.status) + '20',
                      color: getStatusColor(flight.status),
                      fontSize: theme.typography.small.fontSize,
                    }}
                  >
                    {getStatusIcon(flight.status)}
                    {getStatusLabel(flight.status)}
                  </div>

                  {/* Gate & Terminal */}
                  <div className="flex items-center gap-2">
                    {flight.gate && (
                      <div
                        className="px-2 py-1 rounded text-xs"
                        style={{
                          backgroundColor: theme.colors.background.default,
                          border: `1px solid ${theme.colors.border.main}`,
                        }}
                      >
                        <span style={{ color: theme.colors.text.secondary }}>
                          {t('flights.gate')}{' '}
                        </span>
                        <span
                          className="font-bold"
                          style={{ color: theme.colors.text.primary }}
                        >
                          {flight.gate}
                        </span>
                      </div>
                    )}
                    {flight.terminal && (
                      <div
                        className="px-2 py-1 rounded text-xs"
                        style={{
                          backgroundColor: theme.colors.background.default,
                          border: `1px solid ${theme.colors.border.main}`,
                        }}
                      >
                        <span style={{ color: theme.colors.text.secondary }}>
                          {t('flights.terminal')}
                        </span>
                        <span
                          className="font-bold"
                          style={{ color: theme.colors.text.primary }}
                        >
                          {flight.terminal}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Floating Refresh Button */}
      <button
        onClick={() => fetchFlights()}
        disabled={refreshing}
        className="fixed bottom-20 right-6 md:bottom-8 rounded-full font-medium transition-all flex items-center justify-center shadow-lg z-30"
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: theme.colors.accent.main,
          color: '#fff',
          boxShadow: theme.shadow.lg,
          opacity: refreshing ? 0.6 : 1,
          cursor: refreshing ? 'not-allowed' : 'pointer',
          transform: 'translateY(20px)',
          marginBottom: '80px',

        }}
        onMouseEnter={(e) => {
          if (!refreshing) {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)';
          }
        }}
        onMouseLeave={(e) => {
          if (!refreshing) {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = theme.shadow.lg;
          }
        }}
        aria-label={t('flights.refresh')}
      >
        <RefreshCw className={`w-6 h-6 ${refreshing ? 'animate-spin' : ''}`} />
      </button>
    </div>
  );
}
